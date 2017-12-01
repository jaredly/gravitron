open GravShared;
open SharedTypes;

open Reprocessing;

let red = (~warmup=200., pos) => {
  Enemy.pos,
  color: Constants.red,
  size: 20.,
  warmup: (0., 50.),
  health: (1, 1),
  behavior: SimpleShooter((warmup, 300.), (Reprocessing.Constants.white, 5., 3., 5))
};

let blue = (~warmup=0., pos) => {
  Enemy.pos,
  color: Reprocessing_Constants.blue,
  size: 20.,
  warmup: (0., 50.),
  health: (2, 2),
  behavior: SimpleShooter((warmup, 100.), (Reprocessing.Constants.white, 5., 2., 5))
};

let green = (~warmup=0., pos) => {
  Enemy.pos,
  color: Reprocessing_Constants.green,
  size: 25.,
  /* timer: (0., 100.), */
  warmup: (0., 50.),
  health: (3, 3),
  behavior: TripleShooter((warmup, 200.), (Reprocessing.Constants.blue, 7., 2., 10))
  /* shoot: shoot(~color=Reprocessing.Constants.white, ~size=5., ~vel=2.) */
};

let colorPink = Reprocessing_Utils.color(~r=255, ~g=100, ~b=200, ~a=255);
let pink = (~warmup=0., pos) => {
  Enemy.pos,
  color: colorPink,
  size: 30.,
  warmup: (0., 50.),
  health: (4, 4),
  behavior: Asteroid(pos, MyUtils.v0, (warmup, 200.), 0., (colorPink, 10., 2., 15))
};

/* TODO these should probably be parameterized */
let levels = [|
  [red((600., 600.))],
  [red((200., 200.)), red((600., 600.))],
  [blue((600., 600.))],
  [blue((600., 600.)), blue((200., 200.))],
  [blue((600., 600.)), blue((200., 200.)), blue((600., 200.)), blue((200., 600.))],
  [green((600., 600.))],
  [pink((600., 600.))],
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