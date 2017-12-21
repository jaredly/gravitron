open SharedTypes;

/* TODO use HSV I think */
let randomColor = () => {
  Reprocessing.Utils.color(~r=Random.int(255), ~g=Random.int(255), ~b=Random.int(255), ~a=255)
};

let rec randomBulletStepping = (depth) => {
  open Bullet;
  if (depth > 2) {
    Nothing
  } else
  switch (Random.int(5)) {
  | 0 => TimeBomb((0., Random.float(100.) +. 40.))
  | 1 => Nothing
  | 2 => Scatter((0., Random.float(100.) +. 40.), Random.int(5) + 2, randomBullet(depth + 1))
  | 3 => ProximityScatter(Random.float(100.) +. 50., Random.int(5) + 2, randomBullet(depth + 1))
  /* TODO I'll have to limit "bullets that create bullets" to some reasonable level */
  | 4 => Shooter((0., Random.float(100.) +. 100.), randomBullet(depth + 1))

  | _ => assert(false)
  }
}

and randomBulletMoving = () => {
  open Bullet;
  switch (Random.int(3)) {
  | 0 => Gravity
  | 1 => HeatSeeking(0.3, 5.)
  | 2 => Mine(Random.float(30.) +. 20., Random.float(100.) +. 60., (0., 0.))
  | _ => assert(false)
  }
}

and randomBullet = (depth) => {
  let damage = Random.int(3) * 5 + 5;
  {
    Bullet.color: randomColor(),
    damage,
    size: float_of_int(damage),
    stepping: randomBulletStepping(depth),
    moving: randomBulletMoving(),
    warmup: (0., 40.),
    vel: {theta: 0., mag: Random.float(2.) +. 1.},
    acc: MyUtils.v0,
    pos: (0., 0.)
  }
};

let randomMovement = (pos) => {
  open Enemy;
  switch (Random.int(4)) {
  | 0 => Stationary
  | 1 => GoToPosition(pos)
  | 2 => Wander(pos)
  | 3 => Avoider(Random.float(1.) +. 1.)
  | _ => assert(false)
  }
};

let randomDying = (depth) => switch (Random.int(3)) {
| 0 => Enemy.Normal
| 1 => Asteroid
| 2 => Revenge(Random.int(20) + 4, randomBullet(depth))
| _ => assert(false)
};

let randomStepping = () => switch (Random.int(2)) {
| 0 => Enemy.DoNothing
| 1 => {let min = Random.float(300.) +. 400.; Rabbit(min, (0., min))}
| _ => assert(false)
};

let randomShooting = (depth) => switch (Random.int(3)) {
| 0 => Enemy.OneShot(randomBullet(depth))
| 1 => Enemy.Alternate(randomBullet(depth), randomBullet(depth), false)
| 2 => TripleShot(randomBullet(depth))
| _ => assert(false)
};

let randomEnemy = (~pos, ~color, depth) => {
  Enemy.pos,
  vel: MyUtils.v0,
  color,
  size: Random.float(20.) +. 10.,
  warmup: (0., 40.),
  health: {
    let x = Random.int(8) + 2;
    (x, x)
  },
  animate: 0.,
  movement: randomMovement(pos),
  dying: randomDying(depth + 1),
  stepping: randomStepping(),
  shooting: randomShooting(depth + 1),
  dodges: (0., 0.),
  missileTimer: (0., Random.float(200.) +. 100.),
  selfDefense: None,
};

/* let randomEnemy = (~pos, ~color) => {
  /*
   * Ok, so I want enemies that are beatable. I think they'll have like a difficultly number.
   * And they can't exceed it.
   */
}; */


let makeLevel = (env, easy) => {
  let w = Reprocessing.Env.width(env) |> float_of_int;
  let h = Reprocessing.Env.height(env) |> float_of_int;
  let q = min(w, h) /. 4.;
  let tl = (q, q);
  let tr = (w -. q, q);
  let bl = (q, h -. q);
  let br = (w -. q, h -. q);
  let positions = [|tl, tr, bl, br|];
  let level = ref([]);
  for (i in 0 to Random.int(2) + 1) {
    level := [
      easy
      ? FreeBetter.easyEnemy(~pos=positions[i])
      : FreeBetter.hardEnemy(~pos=positions[i])
      , ...level^]
  };
  level^
};

let makeStage = (env, easy) => {
  let levels = Array.make(5, []);
  for (i in 0 to 4) {
    levels[i] = makeLevel(env, easy)
  };
  levels
};