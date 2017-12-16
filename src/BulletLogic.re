open GravShared;

open SharedTypes;

open MyUtils;

open Reprocessing;

open SharedTypes.Bullet;

let moveBullet = (isDead, wallType, player, bullet, env) => {
  let (vel, moving) = isDead ? (bullet.vel, bullet.moving) : switch bullet.moving {
  | Gravity =>
    let {theta, mag} = vecToward(bullet.pos, player.Player.pos);
    let speedFactor = isPhone ? 10. : 20.;
    let acc = {theta, mag: speedFactor /. mag};
    (vecAdd(bullet.vel, acc), bullet.moving);
  | HeatSeeking(speed, maxvel) =>
    let theta = thetaToward(bullet.pos, player.Player.pos);
    let acc = {theta, mag: speed};
    let vel = vecAdd(bullet.vel, acc);
    let vel = {theta: vel.theta, mag: min(maxvel, vel.mag)};
    /** TODO this might need to be scaled by deltaTime too */
    (vel, bullet.moving);
  | Mine(counter) =>
    let (counter, stopped) = stepTimer(counter, env);
    if (stopped) {
      (v0, Mine(counter))
    } else {
      (bullet.vel, Mine(counter))
    }
  };

  let delta = deltaTime(env);
  let pos = posAdd(bullet.pos, vecToPos(scaleVec(vel, delta)));
  let bullet = {...bullet, moving, vel};

  switch wallType {
  | Minimapped => Some({...bullet, pos})
  | FireWalls => if (offscreen(pos, Env.width(env), Env.height(env), int_of_float(bullet.size)) != OnScreen) {
    None
  } else {
    Some({...bullet, pos})
  }
  | BouncyWalls => {
    let off = offscreen(pos, Env.width(env), Env.height(env), int_of_float(bullet.size));
    let vel = bounceVel(bullet.vel, off);
    let pos = posAdd(bullet.pos, vecToPos(vel));
    Some({...bullet, vel, pos})
  }
  }
};

let bulletToBullet = (bullet, bullets, explosions) => {
  let (removed, bullets, explosions) =
    List.fold_left(
      ((removed, bullets, explosions), other) =>
        (
          removed ?
            (true, [other, ...bullets], explosions) :
            collides(bullet.pos, other.pos, bullet.size +. other.size) ?
              (true, bullets, [bulletExplosion(bullet), bulletExplosion(other), ...explosions]) :
              (false, [other, ...bullets], explosions)
        ),
      (false, [], explosions),
      bullets
    );
  (bullets, explosions, removed)
};

let bomb = bullet => {
  ...bullet,
  size: bullet.size *. 20.,
  stepping: Bomb(false)
};

let scatterBullets = (number, subBullet, pos) => {
  let by = Constants.two_pi /. float_of_int(number);
  let rec loop = (i) =>
    i > 0 ?
      {
        let theta = by *. float_of_int(i);
        [
          {
            ...subBullet,
            pos: pos,
            vel: {mag: subBullet.vel.mag, theta},
            acc: v0
          },
          ...loop(i - 1)
        ]
      } :
      [];
  loop(number)
};

let playerDamage = (env, state, damage) => {
  if (state.me.health - damage > 0) {
    {...state, me: {...state.me, health: state.me.Player.health - damage}}
  } else {
    {
      ...state,
      status: Dead(100),
      me: {...state.me, health: 0, pos: GravShared.getPhonePos(env)},
      explosions: [playerExplosion(state.me), ...state.explosions]
    }
  }
};

let smallerShot = (shooting, size, damage) => switch shooting {
| Enemy.OneShot(b) => Enemy.OneShot({...b, size, damage})
| TripleShot(b) => Enemy.TripleShot({...b, size, damage})
};

let damageEnemy = (env, state, enemy, damage) => {
  open! Enemy;
  let (health, dead) = countDown(enemy.health);
  if (dead) {
    let explosions = [enemyExplosion(enemy), ...state.explosions];
    switch (enemy.dying) {
    | Revenge(count, subBullet) => {
      ...state,
      bullets: scatterBullets(count, subBullet, enemy.pos) @ state.bullets,
      explosions
    }
    | _ => {...state, explosions}
    }
  } else {
    switch (enemy.dying) {
    | Asteroid => {
      let (current, _) = health;
      let (one, two) = asteroidSplitVel();
      let size = float_of_int(current) *. 5. +. 10.;
      let (_, bulletTime) = enemy.missileTimer;
      let shooting = smallerShot(enemy.shooting, float_of_int(2 + current * 2), 2 + current * 3);
      let base = {...enemy, health: (current, current), shooting, size};
      {
        ...state,
        enemies: [
          {
            ...base,
            missileTimer: (Random.float(bulletTime /. 4.), bulletTime),
            movement: EnemyLogic.randomMovement(env, one, enemy.movement)
          },
          {
            ...base,
            missileTimer: (Random.float(bulletTime /. 2.), bulletTime),
            movement: EnemyLogic.randomMovement(env, two, enemy.movement)
          },
          ...state.enemies
        ]
      }
    }
    | _ =>
    {
      ...state,
      enemies: [
        {...enemy, health},
        ...state.enemies
      ]
    }
    }
  }
};

let collideEnemies = (env, state, bullet) => {
  List.fold_left(
    ((state, died), enemy) => {
      if (died) {
        ({...state, enemies: [enemy, ...state.enemies]}, died)
      } else {
        if (collides(enemy.Enemy.pos, bullet.pos, bullet.size +. enemy.Enemy.size))  {
          (
            damageEnemy(env, state, enemy, bullet.damage),
            true
          )
        } else {
          ({...state, enemies: [enemy, ...state.enemies]}, died)
        }
      }
    },
    ({...state, enemies: []}, false),
    state.enemies
  )
};

let collideBullets = (env, state, bullet) => {
  let (bullets, explosions, dead) = bulletToBullet(bullet, state.bullets, state.explosions);
  ({...state, bullets, explosions}, dead)
};

let handleCollisions = (env, state, bullet, isFull) => {
    let playerDist = MyUtils.dist(MyUtils.posSub(bullet.pos, state.me.pos));
    if (state.status == Running && playerDist < state.me.size +. bullet.size) {
      (playerDamage(env, state, bullet.damage), true)
    } else if (!isFull) {
      (state, false)
    } else {
      let (state, died) = collideEnemies(env, state, bullet);
      if (died) {
        (state, died)
      } else {
        collideBullets(env, state, bullet)
      }
    }
};

let step = (env, state, bullet) => {
  switch (moveBullet(state.status != Running, state.wallType, state.me, bullet, env)) {
  | None => state
  | Some(bullet) =>
    let (warmup, isFull) = stepTimer(bullet.warmup, env);
    let bullet = {...bullet, warmup};
    let (state, died) = handleCollisions(env, state, bullet, isFull);
    if (died) {
      {...state, explosions: [bulletExplosion(bullet), ...state.explosions]}
    } else {

      /* let (state, died) = collideBullet */
      switch bullet.stepping {
      | Nothing => {...state, bullets: [bullet, ...state.bullets]}
      | Bomb(dead) => dead
        ? {...state, explosions: [bulletExplosion(bullet), ...state.explosions]}
        : {...state, bullets: [{...bullet, stepping: Bomb(true)}, ...state.bullets]}
      | TimeBomb(counter) =>
        let (counter, tipped) = stepTimer(counter, env);
        {
          ...state,
          bullets: [
            tipped ? bomb(bullet) : {...bullet, stepping: TimeBomb(counter)},
            ...state.bullets
          ]
        }
      | Scatter(counter, number, subBullet) =>
        let (counter, tipped) = stepTimer(counter, env);
        if (tipped) {
          {...state, bullets: scatterBullets(number, subBullet, bullet.pos) @ state.bullets}
        } else {
          {...state, bullets: [{...bullet, stepping: Scatter(counter, number, subBullet)}, ...state.bullets]}
        }
      | Shooter(counter, sub) =>
        let (counter, looped) = loopTimer(counter, env);
        let bullet = {...bullet, stepping: Shooter(counter, sub)};
        let childBullet = EnemyLogic.shotBullet(bullet.pos, bullet.size, state.me.Player.pos, sub);
        if (looped) {
          {...state, bullets: [bullet, childBullet, ...state.bullets]}
        } else {
          {...state, bullets: [bullet, ...state.bullets]}
        }
      | ProximityScatter(minDist, number, subBullet) =>
        let dist = MyUtils.dist(MyUtils.posSub(bullet.pos, state.me.pos));
        if (dist < minDist) {
          {...state, bullets: scatterBullets(number, subBullet, bullet.pos) @ state.bullets}
        } else {
          {...state, bullets: [bullet, ...state.bullets]}
        }
      }
    }
  }
};

let stepBullets = (env, state) => List.fold_left(step(env), {...state, bullets: []}, state.bullets);
