open SharedTypes;
open GravShared;
open Reprocessing;
open MyUtils;

open SharedTypes.Enemy;

let moveEnemy = (env, state, enemy) => {
  switch enemy.movement {
  | Stationary(vel) =>
    let vel = {theta: vel.theta, mag: vel.mag < 0.01 ? 0.0 : vel.mag *. 0.95};
    let pos = posAdd(enemy.pos, vecToPos(vel));
    {...enemy, pos, movement: Stationary(vel)}
  | GoToPosition(target, vel) => {
    let vel = vecAdd(vel, {theta: thetaToward(enemy.pos, target), mag: 0.01});
    let vel = {theta: vel.theta, mag: min(vel.mag, 2.) *. 0.98};
    let pos = posAdd(enemy.pos, vecToPos(vel));
    {...enemy, pos, movement: GoToPosition(target, vel)}
  }
  | Wander(target, vel) =>
    let vel = vecAdd(vel, {theta: thetaToward(enemy.pos, target), mag: 0.01});
    let vel = {theta: vel.theta, mag: min(vel.mag, 4.) *. 0.98};
    let pos = posAdd(enemy.pos, vecToPos(vel));
    let target =
      collides(enemy.pos, target, enemy.size *. 2.)
      ? randomTarget(Env.width(env) |> float_of_int, Env.height(env) |> float_of_int)
      : target;
    {...enemy, pos, movement: Wander(target, vel)}
  | Avoider(vel) =>
    let vel = vecAdd(vel, {theta: thetaToward(state.me.Player.pos, enemy.pos), mag: 0.01});
    let vel = {theta: vel.theta, mag: min(vel.mag, 4.) *. 0.98};
    let pos = posAdd(enemy.pos, vecToPos(vel));
    {...enemy, pos, movement: Avoider(vel)}
  | Guard(_, _) => assert(false)
  }
};

let randomTarget = env => (
  Random.float(float_of_int(Env.width(env))),
  Random.float(float_of_int(Env.height(env)))
);

let randomMovement = (env, vec, movement) => {
  open! Enemy;
  switch movement {
  | Stationary(_) => Stationary(vec)
  | GoToPosition(_, _) => GoToPosition(randomTarget(env), vec)
  | Wander(_, _) => Wander(randomTarget(env), vec)
  | Avoider(_) => Avoider(vec)
  | Guard(id, _) => Guard(id, vec)
  }
};

let movementWithVel = (movement, vel) => switch movement {
| Stationary(_) => Stationary(vel)
| GoToPosition(target, _) => GoToPosition(target, vel)
| Wander(target, _) => Wander(target, vel)
| Avoider(_) => Avoider(vel)
| Guard(_, _) => assert(false)
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
          movement: randomMovement(env, one, enemy.movement)
        },
        [{...enemy,
            movement: randomMovement(env, two, enemy.movement),
            missileTimer: randomizeTimer(enemy.missileTimer),
            /* stepping: Rabbit(counter) */
          stepping: Rabbit(mintime, (0., max(mintime, (Random.float(0.5) +. 0.75) *. counterMax)))
          }, ...state.enemies]
      )
    } else {
      ({...enemy, stepping: Rabbit(mintime, counter)}, state.enemies)
    }
  | Protected(_) => assert(false)
  }
};

let shotBullet = (~theta=0., startPos, size, playerPos, bullet) => {
  let theta = MyUtils.thetaToward(startPos, playerPos) +. theta;
  let pos = MyUtils.vecToPos({mag: size +. bullet.Bullet.size +. 5., theta});
  {...bullet, pos: posAdd(startPos, pos), vel: {...bullet.vel, theta}}
};

let shoot = (env, state, enemy) => {
  let (missileTimer, flipped) = loopTimer(enemy.missileTimer, env);
  let enemy = {...enemy, missileTimer};
  (enemy, if (flipped) {
    switch enemy.shooting {
    | OneShot(bullet) => [shotBullet(enemy.pos, enemy.size, state.me.pos, bullet), ...state.bullets]
    | TripleShot(bullet) => [
        shotBullet(~theta=0., enemy.pos, enemy.size, state.me.pos, bullet),
        shotBullet(~theta=(-0.3), enemy.pos, enemy.size, state.me.pos, bullet),
        shotBullet(~theta=0.3, enemy.pos, enemy.size, state.me.pos, bullet),
        ...state.bullets
      ]
    }
  } else {
    state.bullets
  })
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
