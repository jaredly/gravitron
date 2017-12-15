
open MyUtils;

/*
TODO paired bullets
- triple-shot (replace double prolly)
- paired-bullet (not 100% sure how to let bullets refer to each other.
    Orr I could have a "doublebullet" that just has different step rules.
    Maybe that makes sense?)
- triple-paired
- rabbits (wandering multipliers)
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
};

/* type bulletConfig = (Reprocessing.colorT, float, float, int); */

module Bullet = {
    /** How many to break into, and timer */
  type moving =
    | Gravity
    | HeatSeeking(float)
    | Mine(counter)
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

  let template = (
    ~color,
    ~damage,
    ~size,
    ~stepping=Nothing,
    ~moving=Gravity,
    ~warmup=(0., 50.),
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

module Enemy = {
  /* color, size, speed */
  type movement =
    | Stationary(vec)
    /* target, velocity */
    | GoToPosition(pos, vec)
    | Wander(pos, vec)
    | Avoider(vec)
    | Guard(int, vec)
    /* | Avoider(vec) */
    /* | Guard(enemyId) */
    ;

  type stepping =
    | DoNothing
    | Rabbit(counter) /* timer */
    | Protected(counter) /* spawn protector */
    ;

  type dying =
    | Normal
    | Asteroid
    | Revenge(int, Bullet.t)
    ;

  type shooting =
    | OneShot(Bullet.t)
    | TripleShot(Bullet.t)
    ;

  /* type behavior =
    | SimpleShooter(counter, bulletConfig)
    | TripleShooter(counter, bulletConfig)
    | ScatterShot(counter, int, bulletConfig, bulletConfig)
    /* bullettimer, animate, _ */
    | Asteroid(counter, float, bulletConfig)
    /* | Asteroid(counter)
    | DoubleShooter(int, float)
    | Splitter */
    ;

  type shooting =
    | OneShot(counter, bulletConfig)
    | TripleShot(counter, bulletConfig)
    | ScatterShot(counter, int, bulletConfig, bulletConfig)
    ; */

  type t = {
    pos,
    color: Reprocessing.colorT,
    size: float,
    warmup: counter,
    health: counteri,
    animate: float,
    movement,
    dying,
    stepping,
    shooting,
    dodges: float,
    missileTimer: counter,
    /* The percent that it has to be full in order to defent itself */
    selfDefense: option(float),
    /* behavior, */
    /* shoot: (Reprocessing.glEnvT, t, Player.t) => Bullet.t */
  };
  /* let step = (state, enemy) => {
       switch enemy.typ {
       | SimpleShooter()
       }
     }; */
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
  type t = {
    currentWallType: wallType,
    highestBeatenLevels: (int, int, int),
  };
  type t0 = t;
  let userDataVersion = 0;

  let default: t = {
    currentWallType: FireWalls,
    highestBeatenLevels: (-1, -1, -1),
  };

  let convertUp = (version, _value) => {
    switch version {
    | _ => None
    }
  };

  let rec convertToLatest = ((version, value)): option(t) => {
    if (version > userDataVersion) {
      None
    } else if (version == userDataVersion) {
      Some(Obj.magic(value))
    } else {
      convertToLatest((version + 1, convertUp(version, value)))
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

  let updateHighestLevel = (env, userData, level) => {
    let (highest, updated) = setHighest(userData.highestBeatenLevels, userData.currentWallType, level);
    if (updated) {
      saveUserData(env, {...userData, highestBeatenLevels: highest});
    } else {
      userData
    }
  };

  let highestBeatenLevel = ({highestBeatenLevels, currentWallType}) => {
    let (fire, bouncy, mini) = highestBeatenLevels;
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
  userLevels: array(array(Enemy.t)),
  highScores: array(highScore),
  smallFont: Reprocessing.fontT,
  textFont: Reprocessing.fontT,
  titleFont: Reprocessing.fontT,
};

type transition = [
  | `Start
  | `StartFromLevel(int)
  | `Quit
  | `Finished(bool, int, int)
  | `PickWalls
  | `PickLevel
  | `UserLevels
  | `EditLevel(int)
];

let updateHighestBeatenLevel = (env, ctx, level) => {
  {...ctx, userData: UserData.updateHighestLevel(env, ctx.userData, level)}
};

let currentWallType = (ctx) => ctx.userData.UserData.currentWallType;

let updateCurrentWallType = (env, ctx, wallType) => {
  ...ctx,
  userData: UserData.setCurrentWallType(env, ctx.userData, wallType)
};

let fireWallColor = Reprocessing.Utils.color(~r=255, ~g=100, ~b=100, ~a=255);
let fireWallColor = Reprocessing.Utils.color(~r=100, ~g=100, ~b=100, ~a=255);

let bouncyWallColor = Reprocessing.Utils.color(~r=100, ~g=100, ~b=200, ~a=255);
