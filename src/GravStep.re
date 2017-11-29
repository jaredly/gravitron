open GravShared;

open MyUtils;

open Reprocessing;

let arrowAccs = {
  let speed = 0.3;
  [
    (Events.Left, vecFromPos((-. speed, 0.))),
    (Events.Up, vecFromPos((0., -. speed))),
    (Events.Down, vecFromPos((0., speed))),
    (Events.Right, vecFromPos((speed, 0.)))
  ]
};

let floatPos = ((a, b)) => (float_of_int(a), float_of_int(b));

let clampVec = (vel, min, max, fade) =>
  vel.mag > max ?
    {...vel, mag: max} : vel.mag < min ? {...vel, mag: 0.} : {...vel, mag: vel.mag *. fade};

let springToward = (p1, p2, scale) => {
  let vec = vecToward(p1, p2);
  {...vec, mag: vec.mag *. scale}
};

let stepMeMouse = ({me} as state, env) =>
  Player.(
    if (Env.mousePressed(env)) {
      let delta = Env.deltaTime(env) *. 1000. /. 16.;
      let mousePos = floatPos(Reprocessing_Env.mouse(env));
      let mousePos = isPhone ? scalePos(mousePos, phoneScale) : mousePos;
      let vel = springToward(me.pos, mousePos, 0.1);
      let vel = clampVec(vel, 0.01, 7., 0.98);
      let pos = posAdd(me.pos, vecToPos(scaleVec(vel, delta)));
      {...state, me: {...me, pos, vel}}
    } else {
      state
    }
  );

let stepMeJoystick = ({me} as state, env) =>
  Player.(
    if (Env.mousePressed(env)) {
      let vel = springToward(joystickPos(env), floatPos(Reprocessing_Env.mouse(env)), 0.1);
      let vel = clampVec(vel, 1., 7., 0.98);
      let delta = Env.deltaTime(env) *. 1000. /. 16.;
      let pos = posAdd(me.pos, vecToPos(scaleVec(vel, delta)));
      {...state, me: {...me, pos, vel}}
    } else {
      state
    }
  );

let stepMeKeys = ({me} as state, env) => {
  open Player;
  let vel =
    List.fold_left(
      (acc, (key, acc')) => Env.key(key, env) ? vecAdd(acc, acc') : acc,
      me.vel,
      arrowAccs
    );
  let vel = clampVec(vel, 0.01, 7., 0.98);
  let delta = Env.deltaTime(env) *. 1000. /. 16.;
  let pos = posAdd(me.pos, vecToPos(scaleVec(vel, delta)));
  {...state, me: {...me, pos, vel}}
};

let collides = (p1, p2, d) => dist(posSub(p1, p2)) <= d;

let stepTimer = ((current, max), env) => {
  let time = Reprocessing_Env.deltaTime(env) *. 1000. /. 16.;
  if (current +. time >= max) {
    ((max, max), true)
  } else {
    ((current +. time, max), false)
  }
};

let loopTimer = ((current, max), env) => {
  let time = Reprocessing_Env.deltaTime(env) *. 1000. /. 16.;
  if (current +. time >= max) {
    ((0., max), true)
  } else {
    ((current +. time, max), false)
  }
};

let countDown = ((current, max)) =>
  if (current <= 1) {
    ((0, max), true)
  } else {
    ((current - 1, max), false)
  };

let stepEnemy = (env, state, enemy) => {
  open Enemy;
  let (warmup, loaded) = stepTimer(enemy.warmup, env);
  if (! loaded) {
    {...state, enemies: [{...enemy, warmup}, ...state.enemies]}
  } else if (collides(enemy.pos, state.me.Player.pos, enemy.size +. state.me.Player.size)) {
    {
      ...state,
      status: Dead(100),
      explosions: [playerExplosion(state.me), enemyExplosion(enemy), ...state.explosions]
    }
  } else {
    switch (enemy.behavior) {
    | DoubleShooter(timer, bulletConfig) =>
      let (timer, looped) = loopTimer(timer, env);
      if (looped) {
        {
          ...state,
          bullets: [
            shoot(~theta=0.2, bulletConfig, env, enemy, state.me),
            shoot(~theta= -0.2, bulletConfig, env, enemy, state.me),
            ...state.bullets],
          enemies: [{...enemy, warmup, behavior: DoubleShooter(timer, bulletConfig)}, ...state.enemies]
        }
      } else {
        {...state, enemies: [{...enemy, warmup, behavior: DoubleShooter(timer, bulletConfig)}, ...state.enemies]}
      }
    | SimpleShooter(timer, bulletConfig) =>
      let (timer, looped) = loopTimer(timer, env);
      if (looped) {
        {
          ...state,
          bullets: [shoot(bulletConfig, env, enemy, state.me), ...state.bullets],
          enemies: [{...enemy, warmup, behavior: SimpleShooter(timer, bulletConfig)}, ...state.enemies]
        }
      } else {
        {...state, enemies: [{...enemy, warmup, behavior: SimpleShooter(timer, bulletConfig)}, ...state.enemies]}
      }
    }
  }
};

let stepEnemies = (state, env) =>
  List.fold_left(stepEnemy(env), {...state, enemies: []}, state.enemies);

let moveBullet = (bullet, env) => {
  let delta = Env.deltaTime(env) *. 1000. /. 16.;
  Bullet.{...bullet, pos: posAdd(bullet.pos, vecToPos(scaleVec(bullet.vel, delta)))}
};

let bulletToBullet = (bullet, bullets, explosions) => {
  let (removed, bullets, explosions) =
    List.fold_left(
      ((removed, bullets, explosions), other) =>
        Bullet.(
          removed ?
            (true, [other, ...bullets], explosions) :
            collides(bullet.pos, other.pos, bullet.size +. other.size) ?
              (true, bullets, [bulletExplosion(bullet), bulletExplosion(other), ...explosions]) :
              (false, [other, ...bullets], explosions)
        ),
      (false, [], explosions),
      bullets
    );
  if (removed) {
    (bullets, explosions)
  } else {
    ([bullet, ...bullets], explosions)
  }
};

let bulletToEnemiesAndBullets = (bullet, state) => {
  let (hit, enemies, explosions) =
    List.fold_left(
      ((hit, enemies, explosions), enemy) =>
        hit ?
          (hit, [enemy, ...enemies], explosions) :
          (
            if (collides(enemy.Enemy.pos, bullet.Bullet.pos, enemy.Enemy.size +. bullet.Bullet.size)) {
              let (health, dead) = countDown(enemy.Enemy.health);
              if (dead) {
                (true, enemies, [enemyExplosion(enemy), bulletExplosion(bullet), ...explosions])
              } else {
                (true, [{...enemy, health}, ...enemies], [bulletExplosion(bullet), ...explosions])
              }
            } else {
              (false, [enemy, ...enemies], explosions)
            }
          ),
      (false, [], state.explosions),
      state.enemies
    );
  if (hit) {
    {...state, enemies, explosions}
  } else {
    let (bullets, explosions) = bulletToBullet(bullet, state.bullets, state.explosions);
    {...state, bullets, explosions}
  }
};

let stepBullets = (state, env) => {
  open Bullet;
  let player = state.me;
  List.fold_left(
    (state, bullet) =>
      switch state.status {
      | Initial
      | Won(_)
      | Dead(_) => bulletToEnemiesAndBullets(moveBullet(bullet, env), state)
      | Running =>
        let {theta, mag} = vecToward(bullet.pos, player.Player.pos);
        if (mag < bullet.size +. player.Player.size) {
          if (state.me.Player.health - bullet.damage > 0) {
            {
              ...state,
              me: {...state.me, health: state.me.Player.health - bullet.damage},
              explosions: [bulletExplosion(bullet), ...state.explosions]
            }
          } else {
            {
              ...state,
              status: Dead(100),
              explosions: [playerExplosion(player), bulletExplosion(bullet), ...state.explosions]
            }
          }
        } else {
          let acc = {theta, mag: 20. /. mag};
          let vel = vecAdd(bullet.vel, acc);
          let pos = posAdd(bullet.pos, vecToPos(vel));
          bulletToEnemiesAndBullets({...bullet, acc, vel, pos}, state)
        }
      },
    {...state, bullets: []},
    state.bullets
  )
};

let stepExplosions = (explosions, env) =>
  Explosion.(
    List.fold_left(
      (explosions, {timer} as explosion) => {
        let (timer, finished) = stepTimer(timer, env);
        finished ? explosions : [{...explosion, timer}, ...explosions]
      },
      [],
      explosions
    )
  );