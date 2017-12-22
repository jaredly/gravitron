open SharedTypes;
open GravShared;
open Reprocessing;
open MyUtils;

open SharedTypes.Enemy;

let offscreenTheta = offscreen => switch offscreen {
  | Top => Constants.half_pi
  | Bottom => -. Constants.half_pi
  | Left => 0.
  | Right => Constants.pi
  | OnScreen => assert(false)
};

let resetEnemyStepping = stepping => switch stepping {
| DoNothing => DoNothing
| Rabbit(mintime, (at, max)) => Rabbit(mintime, (0., max))
};

/* let evade = */

let moveEnemy = (env, state, enemy) => {
  let vel = enemy.vel;
  switch enemy.movement {
  | Stationary =>
    let vel = {theta: vel.theta, mag: vel.mag < 0.01 ? 0.0 : vel.mag *. 0.95};
    let pos = posAdd(enemy.pos, vecToPos(vel));
    {...enemy, pos, vel, movement: Stationary}
  | GoToPosition(target) => {
    let vel = vecAdd(vel, {theta: thetaToward(enemy.pos, target), mag: 0.01});
    let vel = {theta: vel.theta, mag: min(max(vel.mag, 0.), 2.) *. 0.98};
    let pos = posAdd(enemy.pos, vecToPos(vel));
    {...enemy, pos, vel, movement: GoToPosition(target)}
  }
  | Wander(target) =>
    let vel = vecAdd(vel, {theta: thetaToward(enemy.pos, target), mag: 0.01});
    let vel = {theta: vel.theta, mag: min(max(vel.mag, 0.), 4.) *. 0.98};
    let pos = posAdd(enemy.pos, vecToPos(vel));
    let target =
      collides(enemy.pos, target, enemy.size *. 2.)
      ? randomTarget(Env.width(env) |> float_of_int, Env.height(env) |> float_of_int, enemy.size)
      : target;
    {...enemy, pos, vel, movement: Wander(target)}
  | Avoider(minDist) =>
    let vel = if (dist(MyUtils.posSub(state.me.pos, enemy.pos)) < minDist) {
      vecAdd(vel, {theta: thetaToward(state.me.Player.pos, enemy.pos), mag: 0.1});
    } else {
      vel
    };
    let vel = switch (offscreen(enemy.pos, Env.width(env), Env.height(env), int_of_float(enemy.size))) {
      | OnScreen => vel
      | x => {
        let theta = offscreenTheta(x);
        vecAdd(vel, {theta, mag: 1.});
        /* let pos = posAdd(enemy.pos, vecToPos(vel)) */
      }
    };
    let vel = {theta: vel.theta, mag: vel.mag *. 0.98};
    let pos = posAdd(enemy.pos, vecToPos(vel));
    {...enemy, pos, vel, movement: Avoider(minDist)}
  }
};

let randomTarget = (env, size) => randomTarget(
  float_of_int(Env.width(env)),
  float_of_int(Env.height(env)),
  size
);

let randomMovement = (env, movement, size) => {
  open! Enemy;
  switch movement {
  | Stationary => Stationary
  | GoToPosition(_) => GoToPosition(randomTarget(env, size))
  | Wander(_) => Wander(randomTarget(env, size))
  | Avoider(minDist) => Avoider(minDist)
  }
};

let randomizeTimer = ((t, e)) => {
  (Random.float(e), e)
};

let behave = (env, state, enemy) => {
  switch enemy.stepping {
  | DoNothing => (enemy, state.enemies)
  | Rabbit(mintime, counter) =>
    let (counter, flipped) = loopTimer(counter, env);
    if (flipped) {
      let (one, two) = asteroidSplitVel();
      let (_, counterMax) = counter;
      (
        {
          ...enemy,
          stepping: Rabbit(mintime, (0., max(mintime, (Random.float(0.5) +. 0.75) *. counterMax))),
          vel: one,
          movement: randomMovement(env, enemy.movement, enemy.size)
        },
        [{...enemy,
            movement: randomMovement(env, enemy.movement, enemy.size),
            vel: two,
            missileTimer: randomizeTimer(enemy.missileTimer),
            /* stepping: Rabbit(counter) */
          stepping: Rabbit(mintime, (0., max(mintime, (Random.float(0.5) +. 0.75) *. counterMax)))
          }, ...state.enemies]
      )
    } else {
      ({...enemy, stepping: Rabbit(mintime, counter)}, state.enemies)
    }
  }
};

let shotBullet = (~theta=0., startPos, size, playerPos, bullet) => {
  let theta = MyUtils.thetaToward(startPos, playerPos) +. theta;
  let pos = MyUtils.vecToPos({mag: size +. bullet.Bullet.size +. 5., theta});
  Bullet.init({...bullet, pos: posAdd(startPos, pos), vel: {...bullet.vel, theta}})
};

let shoot = (env, state, enemy) => {
  let (missileTimer, flipped) = loopTimer(enemy.missileTimer, env);
  let enemy = {...enemy, missileTimer};
  let (bullets, shooting) = if (flipped) {
    switch enemy.shooting {
    | OneShot(bullet) => ([shotBullet(enemy.pos, enemy.size, state.me.pos, bullet), ...state.bullets], enemy.shooting)
    | Alternate(bullet1, bullet2, first) => ([shotBullet(enemy.pos, enemy.size, state.me.pos, first ? bullet1 : bullet2), ...state.bullets],
      Alternate(bullet1, bullet2, !first)
    )
    | TripleShot(bullet) => ([
        shotBullet(~theta=0., enemy.pos, enemy.size, state.me.pos, bullet),
        shotBullet(~theta=(-0.5), enemy.pos, enemy.size, state.me.pos, bullet),
        shotBullet(~theta=0.5, enemy.pos, enemy.size, state.me.pos, bullet),
        ...state.bullets
      ], enemy.shooting)
    }
  } else {
    (state.bullets, enemy.shooting)
  };
  ({...enemy, shooting}, bullets)
};

let step = (env, state, enemy) => {
  let (warmup, loaded) = stepTimer(enemy.warmup, env);
  let enemy = {...enemy, warmup, animate: enemy.animate +. deltaTime(env)};
  if (! loaded) {
    {...state, enemies: [enemy, ...state.enemies]}
  } else if (collides(enemy.pos, state.me.Player.pos, enemy.size +. state.me.Player.size)) {
    {
      ...state,
      status: Dead(100),
      me: {...state.me, health: 0, pos: GravShared.getPhonePos(env)},
      explosions: [playerExplosion(state.me), enemyExplosion(enemy), ...state.explosions]
    }
  } else {
    let enemy = moveEnemy(env, state, enemy);
    let (enemy, enemies) = behave(env, state, enemy);
    let (enemy, bullets) = shoot(env, state, enemy);
    {...state, bullets, enemies: [enemy, ...enemies]}
  }
};

let stepEnemies = (state, env) =>
  List.fold_left(step(env), {...state, enemies: []}, state.enemies);
