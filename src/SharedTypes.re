
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

type bulletConfig = (Reprocessing.colorT, float, float, int);

module Bullet = {
  type behavior =
    | Normal
    /** How many to break into, and timer */
    | Scatter(int, counter, bulletConfig);
  /* Mine - goes a certain distance & stops (not affected by gravity)  */
  /* Mortar - explodes with a largish blast radius after a (random?) timer. */
  /* type size = Small | Medium | Large; */
  type t = {
    color: Reprocessing.colorT,
    behavior,
    warmup: counter,
    damage: int,
    size: float,
    vel: vec,
    acc: vec,
    pos
  };
};

module Enemy = {
  /* color, size, speed */
  type movement =
    | Stationary
    /* target, velocity */
    | GoToPosition(pos, vec)
    | Wander(pos, vec)
    /* | Avoider(vec) */
    /* | Guard(enemyId) */
    ;

  type dying =
     /* animation */
    | Asteroid(float)
    | Revenge
    ;

  type stepping =
    | Rabbit(float) /* timer */
    | Protected(float) /* spawn protector */
    ;

  type behavior =
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
    ;

  type t = {
    pos,
    color: Reprocessing.colorT,
    size: float,
    /* timer: counter, */
    warmup: counter,
    health: counteri,
    movement,
    behavior,
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
  | `Finished(bool)
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