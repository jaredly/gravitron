
open MyUtils;

/*
TODO paired bullets
- paired-bullet (not 100% sure how to let bullets refer to each other.
    Orr I could have a "doublebullet" that just has different step rules.
    Maybe that makes sense?)
- triple-paired
- protected boss (spawns minions that circle around them. if the boss dies,they become wanderers
    again, not super sure how to have enemies know about each other.
    in this case though, the number of enemies is probably pretty bounded
    so I don't need to set up a hashmap or anything)
*/

module Player = {
  type t = {
    pos,
    color: Reprocessing.colorT,
    health: int,
    lives: int,
    vel: vec,
    acc: vec,
    size: float
  };
  let fullHealth = 100;
  let fullLives = 2;
  let rejuvinate = me => {...me, health: fullHealth, lives: fullLives};
};

/*
Gravity - circle
HeatSeeking - triangle in velocity direction - maybe with exhaust tail?
Mine - hexagon, with timer circle

TimeBomb - ??
Bomb - normal circle, it's gone in a second anyway
Nothing -
Scatter - show the circles inside of a one
ProximityScatter - at 2x distance, start to reveal the circles inside
Shooter - with a shooting pipe
*/

module Bullet = {
    /** How many to break into, and timer */
  type moving =
    | Gravity
    | HeatSeeking(float, float)
    | Mine(float, float, counter)
  and stepping =
    | TimeBomb(counter)
    | Bomb(bool)
    | Nothing
    | Scatter(counter, int, t)
    | ProximityScatter(float, int, t)
    | Shooter(counter, t)
  and t = {
    color: Reprocessing.colorT,
    damage: int,
    size: float,
    stepping,
    moving,
    warmup: counter,
    vel: vec,
    acc: vec,
    pos
  };

  let init = (bullet) => {
    let moving = switch bullet.moving {
    | Mine(min, max, _) => Mine(min, max, (0., Random.float(max -. min) +. min))
    | x => x
    };
    {...bullet, moving}
  };

  let template = (
    ~color,
    ~damage,
    ~size,
    ~stepping=Nothing,
    ~moving=Gravity,
    ~warmup=(0., 30.),
    ~speed=0.,
    ~acc=v0,
    ~pos=(0., 0.),
    ()
  ) => {
    color, damage, size, stepping, moving, warmup, vel: {theta: 0., mag: speed}, acc, pos
  }
};



/*

Moving
- gravity
- heat-seeking
- mine (goes an amount straight & stops)
- (??) paired gravity?


Stepping
- time-bomb -> after a timer, transforms into a much bigger immediately self-destructing bullet (bomb)
- bomb -> self-destructs after 1 step
- nothing
- scatter - after a timer, splits into n other bullets shooting out
- shooter - shoots out bullets at you on a timer

Colliding
- ???


Mine - goes a certain distance & stops (not affected by gravity)
Mortar - explodes with a largish blast radius after a (random?) timer.
this could be implemented as just spawning a large bullet that auto-destructs on step 2 (step 1 will collide if anything's there)
Shooter - shoots out mini bullets at youooo, while also being gravitational
Paired! they're gravitated to each other too, and can't kill each other
Missile -> shaped like an arrow, it's self-powered (constant accel) toward you.

Scatter (maybe with levels of scatter? like you could have a 2-level scatter)
  (orr I guess you just define the child behavior as also scatter)

*/


/*

Dodging?
Anti-missile defense system? (if you're over X% powered, you can shoot a small missile to take down an incoming one)

Moving
- Stationary
- GoToPosition
- Wander
- Avoider (avoids the player)
- Guard (circles the guarded thing)


Dying
- Normal
- Asteroid(size)
- Revenge(shoot out a cluster of bullets)
-


Stepping
- Rabbit - subdivide as long as its alive
- Protected - spawn a protector after a timer (maybe only if there isn't one?)


Shooting (all enemies have a shoot timer)


 */

/*
Rabbit - a timer for split, somehow -- orr maybe they get distended? or have a circle growing iwthin them. yeah.
Protected - show timer for spawning another

Asteroid - got the mini spinners inside
Revenge - maybe spikey? or the little circles on the outside

OneShot - a shooter thing
TripleShot - 3 shooters, at angles

*/

module Enemy = {
  /* color, size, speed */
  type movement =
    | Stationary
    /* target, velocity */
    | GoToPosition(pos)
    | Wander(pos)
    | Avoider(float)
    /* | Guard(int, vec) */
    ;

  type stepping =
    | DoNothing
    | Rabbit(float, counter) /* mintime, timer */
    /* | Protected(counter) spawn protector */
    ;

  type dying =
    | Normal
    | Asteroid
    | Revenge(int, Bullet.t)
    ;

  type shooting =
    | OneShot(Bullet.t)
    | Alternate(Bullet.t, Bullet.t, bool)
    | TripleShot(Bullet.t)
    ;

  type t = {
    pos,
    vel: vec,
    color: Reprocessing.colorT,
    size: float,
    warmup: counter,
    health: counteri,
    animate: float,
    movement,
    dying,
    stepping,
    shooting,
    /* Accel, maxvel */
    dodges: (float, float),
    missileTimer: counter,
    /* The percent that it has to be full in order to defent itself */
    selfDefense: option(float),
  };
};

module Explosion = {
  type t = {
    pos,
    color: Reprocessing.colorT,
    timer: counter,
    size: float
  };
};

type highScore = {
  date: float,
  time: string,
};

type wallType =
  | Minimapped
  | BouncyWalls
  | FireWalls;

let optBind = (fn, v) => switch (v) { | None => None | Some(v) => fn(v) };
let optOr = (default, v) => switch v { | None => default | Some(v) => v };

module UserData = {
  let key = "gravitron_data";
  type t0 = {
    currentWallType: wallType,
    highestBeatenLevels: (int, int, int),
  };
  type t1 = {
    currentWallType: wallType,
    highestBeatenStages: (int, int, int),
    highScores: (list(float), list(float), list(float))
  };
  type t = t1;
  let userDataVersion = 1;

  let default: t = {
    currentWallType: BouncyWalls,
    highestBeatenStages: (-1, -1, -1),
    highScores: ([], [], [])
  };

  let convertUp = (version, value) => {
    switch version {
    | 0 => {
      let v: t0 = Obj.magic(value);
      Some({
        currentWallType: v.currentWallType,
        highestBeatenStages: (-1, -1, -1),
        highScores: ([], [], [])
      })
    }
    | _ => None
    }
  };

  let rec convertToLatest = ((version, value): (int, t)): option(t) => {
    if (version > userDataVersion) {
      None
    } else if (version == userDataVersion) {
      Some(value)
    } else {
      switch (convertUp(version, value)) {
      | None => None
      | Some(v) => convertToLatest((version + 1, v))
      }
    }
  };

  let load = env => {
    Reprocessing.Env.loadUserData(~key, env)
    |> optBind(convertToLatest)
    |> optOr(default)
  };

  let setHighest = (highest, wall, level) => {
    let (fire, bouncy, mini) = highest;
    switch wall {
    | FireWalls => ((max(fire, level), bouncy, mini), level > fire)
    | BouncyWalls => ((fire, max(bouncy, level), mini), level > bouncy)
    | Minimapped => ((fire, bouncy, max(mini, level)), level > mini)
    }
  };

  let saveUserData = (env, userData) => {
    let _saved = Reprocessing.Env.saveUserData(~key, ~value=(userDataVersion, userData), env);
    userData
  };

  let updateHighestStage = (env, userData, stage) => {
    let (highest, updated) = setHighest(userData.highestBeatenStages, userData.currentWallType, stage);
    if (updated) {
      saveUserData(env, {...userData, highestBeatenStages: highest});
    } else {
      userData
    }
  };

  let highestBeatenStage = ({highestBeatenStages, currentWallType}) => {
    let (fire, bouncy, mini) = highestBeatenStages;
    switch currentWallType {
    | FireWalls => fire
    | BouncyWalls => bouncy
    | Minimapped => mini
    }
  };

  let setCurrentWallType = (env, userData, typ) => {
    if (typ === userData.currentWallType) {
      userData
    } else {
      saveUserData(env, {...userData, currentWallType: typ})
    }
  };
};

type context = {
  userData: UserData.t,
  stages: array(array(list(Enemy.t))),
  highScores: array(highScore),
  smallFont: Reprocessing.fontT,
  textFont: Reprocessing.fontT,
  titleFont: Reprocessing.fontT,
  smallTitleFont: Reprocessing.fontT,
};

type transition = [
  | `Start
  | `StartFromStage(int)
  | `Quit
  | `Finished(bool, (int, int), int)
  | `PickWalls
  | `PickLevel
  | `UserLevels
  | `EditLevel(int)
];

let updateHighestBeatenStage = (env, ctx, level) => {
  {...ctx, userData: UserData.updateHighestStage(env, ctx.userData, level)}
};

let currentWallType = (ctx) => ctx.userData.UserData.currentWallType;

let updateCurrentWallType = (env, ctx, wallType) => {
  ...ctx,
  userData: UserData.setCurrentWallType(env, ctx.userData, wallType)
};

/* let fireWallColor = Reprocessing.Utils.color(~r=255, ~g=100, ~b=100, ~a=255); */
let fireWallColor = Reprocessing.Utils.color(~r=100, ~g=100, ~b=100, ~a=255);

let bouncyWallColor = Reprocessing.Utils.color(~r=100, ~g=100, ~b=200, ~a=255);
