open GravShared;
open Reprocessing;

let levels = [|
[
  {
    Enemy.pos: (600., 600.),
    color: Constants.red,
    size: 20.,
    timer: (200., 300.),
    warmup: (0., 50.),
    health: (1, 1),
    shoot: shoot(~color=Reprocessing.Constants.white, ~size=5., ~vel=2.)
  }
],
[
  {
    pos: (200., 200.),
    color: Constants.red,
    size: 20.,
    timer: (200., 300.),
    warmup: (0., 50.),
    health: (1, 1),
    shoot: shoot(~color=Reprocessing.Constants.white, ~size=5., ~vel=2.)
  },
  {
    pos: (600., 600.),
    color: Constants.red,
    size: 20.,
    timer: (200., 300.),
    warmup: (0., 50.),
    health: (1, 1),
    shoot: shoot(~color=Reprocessing.Constants.white, ~size=5., ~vel=2.)
  }
],
[
  {
    pos: (600., 600.),
    color: Reprocessing_Constants.blue,
    size: 20.,
    timer: (0., 100.),
    warmup: (0., 50.),
    health: (1, 1),
    shoot: shoot(~color=Reprocessing.Constants.white, ~size=5., ~vel=2.)
  }
],
[
  {
    pos: (600., 600.),
    color: Reprocessing_Constants.blue,
    size: 20.,
    timer: (0., 100.),
    warmup: (0., 50.),
    health: (1, 1),
    shoot: shoot(~color=Reprocessing.Constants.white, ~size=5., ~vel=2.)
  },
  {
    pos: (200., 200.),
    color: Reprocessing_Constants.blue,
    size: 20.,
    timer: (0., 100.),
    warmup: (0., 50.),
    health: (1, 1),
    shoot: shoot(~color=Reprocessing.Constants.white, ~size=5., ~vel=2.)
  }
],
[
  {
    pos: (600., 600.),
    color: Reprocessing_Constants.blue,
    size: 20.,
    timer: (0., 100.),
    warmup: (0., 50.),
    health: (1, 1),
    shoot: shoot(~color=Reprocessing.Constants.white, ~size=5., ~vel=2.)
  },
  {
    pos: (200., 600.),
    color: Reprocessing_Constants.blue,
    size: 20.,
    timer: (0., 100.),
    warmup: (0., 50.),
    health: (1, 1),
    shoot: shoot(~color=Reprocessing.Constants.white, ~size=5., ~vel=2.)
  },
  {
    pos: (600., 200.),
    color: Reprocessing_Constants.blue,
    size: 20.,
    timer: (0., 100.),
    warmup: (0., 50.),
    health: (1, 1),
    shoot: shoot(~color=Reprocessing.Constants.white, ~size=5., ~vel=2.)
  },
  {
    pos: (200., 200.),
    color: Reprocessing_Constants.blue,
    size: 20.,
    timer: (0., 100.),
    warmup: (0., 50.),
    health: (1, 1),
    shoot: shoot(~color=Reprocessing.Constants.white, ~size=5., ~vel=2.)
  }
]
|];

let makePhoneLevels = (env) => {
let w = float_of_int(Env.width(env)) *. phoneScale;
let h = float_of_int(Env.height(env)) *. phoneScale;
[|
  [
    {
      Enemy.pos: (w /. 2., w /. 2.),
      color: Constants.red,
      size: 20.,
      timer: (200., 300.),
      warmup: (0., 50.),
      health: (1, 1),
      shoot: shoot(~color=Reprocessing.Constants.white, ~size=5., ~vel=2.)
    }
  ],
  [
    {
      pos: (w /. 2., w /. 2.),
      color: Constants.red,
      size: 20.,
      timer: (200., 300.),
      warmup: (0., 50.),
      health: (1, 1),
      shoot: shoot(~color=Reprocessing.Constants.white, ~size=5., ~vel=2.)
    },
    {
      pos: (w /. 2., h -. w /. 2.),
      color: Constants.red,
      size: 20.,
      timer: (200., 300.),
      warmup: (0., 50.),
      health: (1, 1),
      shoot: shoot(~color=Reprocessing.Constants.white, ~size=5., ~vel=2.)
    }
  ],
/*
  [
       {
         pos: (w /. 2., w /. 2.),
         color: Reprocessing_Constants.blue,
         size: 20.,
         timer: (0., 100.),
         warmup: (0., 50.),
         health: (1,1),
         shoot: shoot(~color=Reprocessing.Constants.white, ~size=5., ~vel=2.)
       }
     ],
     [
       {
         pos: (w /. 2., w /. 2.),
         color: Reprocessing_Constants.blue,
         size: 20.,
         timer: (0., 100.),
         warmup: (0., 50.),
         health: (1,1),
         shoot: shoot(~color=Reprocessing.Constants.white, ~size=5., ~vel=2.)
       },
       {
         pos: (w /. 2., h -. w /. 2.),
         color: Reprocessing_Constants.blue,
         size: 20.,
         timer: (0., 100.),
         warmup: (0., 50.),
         health: (1,1),
         shoot: shoot(~color=Reprocessing.Constants.white, ~size=5., ~vel=2.)
       }
     ],
     [
       {
         pos: (w /. 3., w /. 3.),
         color: Reprocessing_Constants.blue,
         size: 20.,
         timer: (0., 100.),
         warmup: (0., 50.),
         health: (1,1),
         shoot: shoot(~color=Reprocessing.Constants.white, ~size=5., ~vel=2.)
       },
       {
         pos: (w *. 2. /. 3., w /. 3.),
         color: Reprocessing_Constants.blue,
         size: 20.,
         timer: (0., 100.),
         warmup: (0., 50.),
         health: (1,1),
         shoot: shoot(~color=Reprocessing.Constants.white, ~size=5., ~vel=2.)
       },
       {
         pos: (w /. 3., h -. w /. 3.),
         color: Reprocessing_Constants.blue,
         size: 20.,
         timer: (0., 100.),
         warmup: (0., 50.),
         health: (1,1),
         shoot: shoot(~color=Reprocessing.Constants.white, ~size=5., ~vel=2.)
       },
       {
         pos: (w *. 2. /. 3., h -. w /. 3.),
         color: Reprocessing_Constants.blue,
         size: 20.,
         timer: (0., 100.),
         warmup: (0., 50.),
         health: (1,1),
         shoot: shoot(~color=Reprocessing.Constants.white, ~size=5., ~vel=2.)
       }
     ]
     */
|]
};