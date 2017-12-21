open SharedTypes;

/* TODO use HSV I think */
let randomColor = () => {
  Reprocessing.Utils.color(~r=Random.int(255), ~g=Random.int(255), ~b=Random.int(255), ~a=255)
};

let choose = arr => arr[Random.int(Array.length(arr))];

let basicBullet = (damage) => {
  Bullet.color: randomColor(),
  damage,
  size: float_of_int(damage),
  warmup: (0., 40.),
  acc: MyUtils.v0,
  pos: (0., 0.),
  vel: {theta: 0., mag: Random.float(2.) +. 1.},
  stepping: Nothing,
  moving: Gravity,
};

let simpleBullet = () => {
  open Bullet;
  let damage = choose([|3, 5, 7, 9|]);
  let (stepping, moving) = choose([|
    (TimeBomb((0., Random.float(100.) +. 80.)), Gravity),
    (TimeBomb((0., Random.float(100.) +. 80.)), Gravity),
    (TimeBomb((0., Random.float(100.) +. 80.)), Gravity),
    (TimeBomb((0., Random.float(100.) +. 80.)), Gravity),
    (Nothing, Gravity),
    (Nothing, Gravity),
    (Nothing, Gravity),
    (Nothing, Gravity),
    (Nothing, Gravity),
    (Nothing, Gravity),
    (Nothing, Gravity),
    (Nothing, Gravity),
    (Nothing, Gravity),
    (Nothing, Gravity),
    (Nothing, HeatSeeking(0.3, 5.))
  |]);
  {...basicBullet(damage), stepping, moving}
};

let complexBullet = () => {
  open Bullet;
  let damage = choose([|3, 5, 7, 9|]);
  let child = simpleBullet();
  let stepping = choose([|
    Scatter((0., Random.float(100.) +. 40.), Random.int(5) + 2, child),
    ProximityScatter(Random.float(100.) +. 100., Random.int(5) + 2, child),
    Shooter((0., Random.float(100.) +. 200.), child),
  |]);
  let moving = choose([|
    Gravity,
    HeatSeeking(0.3, 5.),
    Mine(Random.float(30.) +. 20., Random.float(100.) +. 100., (0., 0.))
  |]);
  {...basicBullet(damage), stepping, moving}
};

let basicEnemy = (pos, color, health, missileTimer) => {
  open Enemy;
  {
    pos,
    vel: MyUtils.v0,
    color,
    size: 20.,
    warmup: (0., 40.),
    health: (health, health),
    animate: 0.,
    movement: choose([|Stationary, Wander(pos), Avoider(Random.float(1.) +. 1.)|]),
    dying: Normal,
    stepping: DoNothing,
    shooting: OneShot(basicBullet(1)),
    dodges: (0., 0.),
    missileTimer: (0., missileTimer),
    selfDefense: None,
  };
};

let easyEnemy = (~pos) => {
  ...basicEnemy(
    pos,
    randomColor(),
    Random.int(5) + 1,
    Random.float(300.) +. 100.
  ),
  shooting: {
    let b = simpleBullet();
    choose([|Enemy.OneShot(b), TripleShot(b), Alternate(b, simpleBullet(), true)|])
  }
};

let hardEnemy = (~pos) => {
  open Enemy;
  let health = choose([|2, 3, 5, 7|]);
  {
    ...basicEnemy(
      pos,
      randomColor(),
      health,
      Random.float(300.) +. 100.
    ),
    size: 25. +. Random.float(20.),
    shooting: {
      let b = choose([|simpleBullet(), simpleBullet(), complexBullet()|]);
      choose([|OneShot(b), TripleShot(b), Alternate(b, simpleBullet(), true)|])
    },
    dying: health <= 3 ? choose([|Normal, Normal, Normal, Asteroid, Revenge(Random.int(20) + 4, simpleBullet())|])
      : choose([|Normal, Normal, Normal, Revenge(Random.int(20) + 4, simpleBullet())|]),
    stepping: choose([|DoNothing, DoNothing, Rabbit(600., (0., 600.))|])
  };
};


