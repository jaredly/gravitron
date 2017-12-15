open GravShared;
open SharedTypes;

open Reprocessing;

open Enemy;

let initialSpeed = isPhone ? 1. : 2.;
let sizeFactor = isPhone ? 0.8 : 1.0;

/* Enemy types */

let defaultEnemy = (pos, warmup, maxTime) => {
  pos,
  color: Constants.white,
  size: 20. *. sizeFactor,
  warmup: (0., 50.),
  health: (1, 1),
  animate: 0.,
  movement: Stationary(MyUtils.v0),
  dying: Normal,
  stepping: DoNothing,
  shooting: OneShot(Bullet.template(
    ~color=Constants.white,
    ~size=5. *. sizeFactor,
    ~speed=initialSpeed,
    ~damage=5,
    ()
  )),
  dodges: 0.,
  missileTimer: (warmup, maxTime),
  selfDefense: None,
  /* behavior: SimpleShooter((warmup, 300.), (Reprocessing.Constants.white, 5. *. sizeFactor, initialSpeed, 5)) */
};

let red = (~warmup=200., pos) => {
  ...defaultEnemy(pos, warmup, 300.),
  color: Constants.red,
  size: 20. *. sizeFactor,
  shooting: OneShot(Bullet.template(
    ~color=Constants.white,
    ~size=5. *. sizeFactor,
    ~speed=initialSpeed,
    ~damage=5,
    ()
  ))
};

let blue = (~warmup=100., pos) => {
  ...defaultEnemy(pos, warmup, 300.),
  color: Reprocessing_Constants.blue,
  size: 20. *. sizeFactor,
  health: (2, 2),
  shooting: OneShot(Bullet.template(
    ~color=Utils.color(~r=150, ~g=150, ~b=255, ~a=255),
    ~size=4. *. sizeFactor,
    ~speed=initialSpeed,
    ~damage=3,
    ()
  ))
};

let smallGreen = (~warmup=0., pos) => {
  ...defaultEnemy(pos, warmup, 200.),
  color: Reprocessing_Constants.green,
  size: 15. *. sizeFactor,
  health: (3, 3),
  shooting: TripleShot(Bullet.template(
    ~color=Reprocessing.Constants.green,
    ~size=4. *. sizeFactor,
    ~speed=initialSpeed,
    ~damage=5,
    ()
  ))
};

let green = (~warmup=0., pos) => {
  ...defaultEnemy(pos, warmup, 200.),
  color: Reprocessing_Constants.green,
  size: 25. *. sizeFactor,
  health: (5, 5),
  shooting: TripleShot(Bullet.template(
    ~color=Reprocessing.Constants.green,
    ~size=7. *. sizeFactor,
    ~speed=initialSpeed,
    ~damage=10,
    ()
  ))
};

let colorPink = Reprocessing_Utils.color(~r=255, ~g=100, ~b=200, ~a=255);
let pink = (~warmup=0., pos) => {
  ...defaultEnemy(pos, warmup, 300.),
  color: colorPink,
  size: 30. *. sizeFactor,
  health: (4, 4),
  movement: GoToPosition(pos, MyUtils.v0),
  dying: Asteroid,
  shooting: OneShot(Bullet.template(
    ~color=colorPink,
    ~size=10. *. sizeFactor,
    ~speed=initialSpeed,
    ~damage=15,
    ()
  ))
};

let color = Reprocessing.Utils.color(~r=100, ~g=150, ~b=255, ~a=255);
let scatterShooter = (~warmup=200., pos) => {
  ...defaultEnemy(pos, warmup, 300.),
  color,
  size: 35. *. sizeFactor,
  health: (10, 10),
  movement: Wander(pos, MyUtils.v0),
  /* behavior: ScatterShot((warmup, 300.), 5, (color, 10. *. sizeFactor, initialSpeed *. 1.5, 10), (color, 7. *. sizeFactor, initialSpeed, 10)), */
  shooting: OneShot(Bullet.template(
    ~color=colorPink,
    ~size=10. *. sizeFactor,
    ~speed=initialSpeed,
    ~stepping=Bullet.Scatter(
      (0., 60.),
      5,
      Bullet.template(
        ~color,
        ~size=7. *. sizeFactor,
        ~speed=initialSpeed,
        ~damage=10,
        ()
      )
    ),
    ~damage=15,
    ()
  ))
};

/* TODO these should probably be parameterized */
let levels = [|
  [red((600., 600.))],
  [red((200., 200.)), red((600., 600.))],
  [red((200., 200.)), blue((600., 600.))],
  [blue(~warmup=150., (600., 600.)), blue((200., 200.))],
  [blue(~warmup=50., (600., 600.)), blue(~warmup=100., (200., 200.)), blue(~warmup=150., (600., 200.)), blue(~warmup=0., (200., 600.))],
  [smallGreen((600., 600.))],
  [red((200., 200.)), smallGreen((600., 600.)), blue((600., 200.))],
  [green((600., 600.))],
  [scatterShooter((600., 600.))],
  [pink((600., 600.))],
  [
    {
    ...red((600., 600.)),
    movement: Wander((600., 600.), MyUtils.v0),
    stepping: Rabbit(300., (350., 400.))
  },
    {
    ...red((200., 600.)),
    movement: Wander((200., 600.), MyUtils.v0),
    stepping: Rabbit(300., (200., 400.))
  },
    {
    ...red((600., 200.)),
    movement: Wander((600., 200.), MyUtils.v0),
    stepping: Rabbit(300., (0., 400.))
  }
  ],
  [
    {
      ...red((200., 200.)),
      /* movement: Avoider(MyUtils.v0), */
      dying: Revenge(20, Bullet.template(~color=color, ~speed=initialSpeed, ~damage=5, ~size=5. *. sizeFactor, ()))
    },
    {
      ...red((600., 600.)),
      /* movement: Avoider(MyUtils.v0), */
      dying: Revenge(20, Bullet.template(~color=color, ~speed=initialSpeed, ~damage=5, ~size=5. *. sizeFactor, ()))
    },
    {
      ...red((200., 600.)),
      /* movement: Avoider(MyUtils.v0), */
      dying: Revenge(10, Bullet.template(~color=color, ~speed=initialSpeed, ~damage=5, ~size=5. *. sizeFactor, ()))
    }
  ]
  /* List.mapi(
    (i, f) => f((100. +. float_of_int(i) *. 100., 100.)),
    [red, blue, green, pink, scatterShooter]
  ), */
|];

let makePhoneLevels = (env) => {
  let w = float_of_int(Env.width(env)) *. phoneScale;
  let h = float_of_int(Env.height(env)) *. phoneScale;
  let v = w /. 4.;
  [|
    [red((w /. 2., v))],
    [red(~warmup=50., (w /. 2., v)), red((w /. 2., h -. v))],
    [red((w /. 2., v)), blue((w /. 2., h -. v))],
    [blue(~warmup=150., (w /. 2., v)), blue((w /. 2., h -. v))],
    [blue(~warmup=50., (v, v)), blue((v *. 3., v)), blue((v, h -. v)), blue((v *. 3., h -. v))],
    [smallGreen((w /. 2., v))],
    [red((v, v)), smallGreen((w -. v, h -. v)), blue((v, h -. v))],
    [green((w /. 2., h -. v))],
    [scatterShooter((w /. 2., v))],
    [pink((w /. 2., h -. v))],
  |]
};

let getLevels = (env) => isPhone ? makePhoneLevels(env) : levels;
