open GravShared;
open SharedTypes;

open Reprocessing;

let red = (~warmup=200., pos) => {
  Enemy.pos,
  color: Constants.red,
  size: 20.,
  warmup: (0., 50.),
  health: (1, 1),
  movement: Stationary,
  behavior: SimpleShooter((warmup, 300.), (Reprocessing.Constants.white, 5., 3., 5))
};

let blue = (~warmup=100., pos) => {
  Enemy.pos,
  color: Reprocessing_Constants.blue,
  size: 20.,
  warmup: (0., 50.),
  health: (2, 2),
  movement: Stationary,
  behavior: SimpleShooter((warmup, 200.), (Reprocessing.Constants.blue, 5., 2., 3))
};

let smallGreen = (~warmup=0., pos) => {
  Enemy.pos,
  color: Reprocessing_Constants.green,
  size: 15.,
  /* timer: (0., 100.), */
  warmup: (0., 50.),
  health: (3, 3),
  movement: Stationary,
  behavior: TripleShooter((warmup, 200.), (Reprocessing.Constants.green, 3., 2., 2))
  /* shoot: shoot(~color=Reprocessing.Constants.white, ~size=5., ~vel=2.) */
};

let green = (~warmup=0., pos) => {
  Enemy.pos,
  color: Reprocessing_Constants.green,
  size: 25.,
  /* timer: (0., 100.), */
  warmup: (0., 50.),
  health: (5, 5),
  movement: Stationary,
  behavior: TripleShooter((warmup, 200.), (Reprocessing.Constants.green, 7., 2., 10))
  /* shoot: shoot(~color=Reprocessing.Constants.white, ~size=5., ~vel=2.) */
};

let colorPink = Reprocessing_Utils.color(~r=255, ~g=100, ~b=200, ~a=255);
let pink = (~warmup=0., pos) => {
  Enemy.pos,
  color: colorPink,
  size: 30.,
  warmup: (0., 50.),
  health: (4, 4),
  movement: GoToPosition(pos, MyUtils.v0),
  behavior: Asteroid((warmup, 200.), 0., (colorPink, 10., 2., 15))
};

let color = Reprocessing.Utils.color(~r=100, ~g=150, ~b=255, ~a=255);
let scatterShooter = (~warmup=200., pos) => {
  Enemy.pos,
  color,
  size: 35.,
  warmup: (0., 50.),
  health: (10, 10),
  movement: Wander(pos, MyUtils.v0),
  behavior: ScatterShot((warmup, 300.), 5, (color, 10., 3., 10), (color, 7., 2., 10))
};

/* TODO these should probably be parameterized */
let levels = [|
  [red((600., 600.))],
  [red((200., 200.)), red((600., 600.))],
  [red((200., 200.)), blue((600., 600.))],
  [blue((600., 600.)), blue((200., 200.))],
  [blue(~warmup=50., (600., 600.)), blue(~warmup=100., (200., 200.)), blue(~warmup=150., (600., 200.)), blue(~warmup=0., (200., 600.))],
  [smallGreen((600., 600.))],
  [red((200., 200.)), smallGreen((600., 600.)), blue((600., 200.))],
  [green((600., 600.))],
  [scatterShooter((600., 600.))],
  [pink((600., 600.))],
  List.mapi(
    (i, f) => f((100. +. float_of_int(i) *. 100., 100.)),
    [red, blue, green, pink, scatterShooter]
  ),
|];

let makePhoneLevels = (env) => {
  let w = float_of_int(Env.width(env)) *. phoneScale;
  let h = float_of_int(Env.height(env)) *. phoneScale;
  [|
    [red((w /. 2., w /. 2.))],
    [red((w /. 2., w /. 2.)), red((w /. 2., h -. w /. 2.))],
    [blue((w /. 2., w /. 2.))],
    [blue((w /. 2., w /. 2.)), blue((w /. 2., h -. w /. 2.))],
    [
      blue((w /. 3., w /. 3.)),
      blue((w *. 2. /. 3., w /. 3.)),
      blue((w /. 3., h -. w /. 3.)),
      blue((w *. 2. /. 3., h -. w /. 3.))
    ]
  |]
};

let getLevels = (env) => isPhone ? makePhoneLevels(env) : levels;
