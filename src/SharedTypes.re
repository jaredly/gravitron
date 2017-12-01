
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

module Bullet = {
  /* type size = Small | Medium | Large; */
  type t = {
    color: Reprocessing.colorT,
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
  type bulletConfig = (Reprocessing.colorT, float, float, int);
  type movement =
    | Stationary
    /* target, velocity */
    | GoToPosition(pos, vec)
    | Wander(pos, vec)
    | Avoider(vec);

  type behavior =
    | SimpleShooter(counter, bulletConfig)
    | TripleShooter(counter, bulletConfig)
    /* bullettimer, animate, _ */
    | Asteroid(counter, float, bulletConfig)
    /* | Asteroid(counter)
    | DoubleShooter(int, float)
    | Splitter */
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

type context = {
  highestBeatenLevel: int,
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
  | `PickLevel
  | `UserLevels
  | `EditLevel(int)
];
