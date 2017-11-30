
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
  type bulletConfig = (Reprocessing.colorT, float, float);
  type behavior =
    | SimpleShooter(counter, bulletConfig)
    | TripleShooter(counter, bulletConfig)
    /* target, size, bullettimer, _ */
    | Asteroid(pos, vec, counter, bulletConfig)
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
  userLevels: array(array(Enemy.t)),
  highScores: array(highScore),
  font: Reprocessing.fontT,
};
