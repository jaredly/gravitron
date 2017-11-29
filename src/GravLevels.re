open GravShared;

open Reprocessing;

let red = (~warmup=200., pos) => {
  Enemy.pos,
  color: Constants.red,
  size: 20.,
  warmup: (0., 50.),
  health: (1, 1),
  behavior: SimpleShooter((warmup, 300.), (Reprocessing.Constants.white, 5., 3.))
};

let blue = (~warmup=0., pos) => {
  Enemy.pos,
  color: Reprocessing_Constants.blue,
  size: 20.,
  warmup: (0., 50.),
  health: (1, 1),
  behavior: SimpleShooter((warmup, 100.), (Reprocessing.Constants.white, 5., 2.))
};

let green = (~warmup=0., pos) => {
  Enemy.pos,
  color: Reprocessing_Constants.green,
  size: 25.,
  /* timer: (0., 100.), */
  warmup: (0., 50.),
  health: (2, 2),
  behavior: DoubleShooter((warmup, 200.), (Reprocessing.Constants.white, 5., 2.))
  /* shoot: shoot(~color=Reprocessing.Constants.white, ~size=5., ~vel=2.) */
};

let orange = (~warmup=0., pos) => {
  Enemy.pos,
  color: Reprocessing_Utils.color(~r=255, ~g=100, ~b=200, ~a=255),
  size: 30.,
  warmup: (0., 50.),
  health: (4, 4),
  behavior: Asteroid(MyUtils.v0, (warmup, 200.), (Constants.white, 3., 2.))
};

let levels = [|
  [red((600., 600.))],
  [red((200., 200.)), red((600., 600.))],
  [blue((600., 600.))],
  [blue((600., 600.)), blue((200., 200.))],
  [blue((600., 600.)), blue((200., 200.)), blue((600., 200.)), blue((200., 600.))],
  [green((600., 600.))],
  [orange((600., 600.))],
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
