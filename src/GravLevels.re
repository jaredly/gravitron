open GravShared;
open SharedTypes;

open Reprocessing;

let initialSpeed = isPhone ? 1. : 2.;
let sizeFactor = isPhone ? 0.8 : 1.0;

let red = (~warmup=200., pos) => {
  Enemy.pos,
  color: Constants.red,
  size: 20. *. sizeFactor,
  warmup: (0., 50.),
  health: (1, 1),
  movement: Stationary,
  behavior: SimpleShooter((warmup, 300.), (Reprocessing.Constants.white, 5. *. sizeFactor, initialSpeed, 5))
};

let blue = (~warmup=100., pos) => {
  Enemy.pos,
  color: Reprocessing_Constants.blue,
  size: 20. *. sizeFactor,
  warmup: (0., 50.),
  health: (2, 2),
  movement: Stationary,
  behavior: SimpleShooter((warmup, 200.), (Reprocessing.Constants.blue, 5. *. sizeFactor,initialSpeed, 3))
};

let smallGreen = (~warmup=0., pos) => {
  Enemy.pos,
  color: Reprocessing_Constants.green,
  size: 15. *. sizeFactor,
  /* timer: (0., 100.), */
  warmup: (0., 50.),
  health: (3, 3),
  movement: Stationary,
  behavior: TripleShooter((warmup, 200.), (Reprocessing.Constants.green, 3. *. sizeFactor,initialSpeed, 2))
  /* shoot: shoot(~color=Reprocessing.Constants.white, ~size=5., ~vel=2.) */
};

let green = (~warmup=0., pos) => {
  Enemy.pos,
  color: Reprocessing_Constants.green,
  size: 25. *. sizeFactor,
  /* timer: (0., 100.), */
  warmup: (0., 50.),
  health: (5, 5),
  movement: Stationary,
  behavior: TripleShooter((warmup, 200.), (Reprocessing.Constants.green, 7. *. sizeFactor, initialSpeed, 10))
  /* shoot: shoot(~color=Reprocessing.Constants.white, ~size=5., ~vel=2.) */
};

let colorPink = Reprocessing_Utils.color(~r=255, ~g=100, ~b=200, ~a=255);
let pink = (~warmup=0., pos) => {
  Enemy.pos,
  color: colorPink,
  size: 30. *. sizeFactor,
  warmup: (0., 50.),
  health: (4, 4),
  movement: GoToPosition(pos, MyUtils.v0),
  behavior: Asteroid((warmup, 200.), 0., (colorPink, 10. *. sizeFactor, initialSpeed, 15))
};

let color = Reprocessing.Utils.color(~r=100, ~g=150, ~b=255, ~a=255);
let scatterShooter = (~warmup=200., pos) => {
  Enemy.pos,
  color,
  size: 35. *. sizeFactor,
  warmup: (0., 50.),
  health: (10, 10),
  movement: Wander(pos, MyUtils.v0),
  behavior: ScatterShot((warmup, 300.), 5, (color, 10. *. sizeFactor, initialSpeed *. 1.5, 10), (color, 7. *. sizeFactor, initialSpeed, 10))
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
