open Reprocessing;
open MyUtils;
let module Utils = MyUtils;

let fullPlayerHealth = 100;

let isPhone = Reprocessing.target == "native-ios";

let phoneScale = 2.;

let getPhonePos = (env) => {
  let w = float_of_int(Env.width(env)) *. phoneScale;
  let h = float_of_int(Env.height(env)) *. phoneScale;
  (w /. 2., h -. w /. 2.)
};

let joystickPos = (env) => {
  let w = Env.width(env) |> float_of_int;
  let h = Env.height(env) |> float_of_int;
  (w -. 75., h -. 75.)
};

module Player = {
  type t = {
    pos,
    color: colorT,
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
    damage: int,
    size: float,
    vel: vec,
    acc: vec,
    pos
  };
};

module Enemy = {
  type bulletConfig = (colorT, float, float);
  type behavior =
    | SimpleShooter(counter, bulletConfig)
    | DoubleShooter(counter, bulletConfig)
    /* size, bullettimer, _ */
    | Asteroid(vec, counter, bulletConfig)
    /* | Asteroid(counter)
    | DoubleShooter(int, float)
    | Splitter */
    ;

  type t = {
    pos,
    color: colorT,
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
    color: colorT,
    timer: counter,
    size: float
  };
};

let playerExplosion = (player) =>
  Player.{
    Explosion.pos: player.pos,
    size: player.size,
    color: player.color,
    timer: Utils.counter(30.)
  };

let enemyExplosion = (enemy) =>
  Enemy.{
    Explosion.pos: enemy.pos,
    size: enemy.size,
    color: enemy.color,
    timer: Utils.counter(30.)
  };

let bulletExplosion = (item) =>
  Bullet.{Explosion.pos: item.pos, size: item.size, color: item.color, timer: Utils.counter(30.)};

let posToward = (p1, p2, distance) =>
  posAdd(p1, vecToPos({mag: distance, theta: thetaToward(p1, p2)}));

let shoot = (~theta=0., (color, size, vel), env, self, player) => {
  open Enemy;
  let theta = thetaToward(self.pos, player.Player.pos) +. theta;
  let pos = vecToPos({mag: self.size +. size +. 5., theta});
  {Bullet.color, size, pos: posAdd(self.pos, pos), vel: {mag: vel, theta}, acc: v0, damage: 10}
};

let circle = (~center, ~rad) => Reprocessing.Draw.ellipsef(~center, ~radx=rad, ~rady=rad);


type status =
  | Initial
  | Running
  | Paused
  | Won(float)
  | Dead(int);

type state = {
  status,
  level: int,
  font: fontT,
  levels: array(list(Enemy.t)),
  me: Player.t,
  enemies: list(Enemy.t),
  bullets: list(Bullet.t),
  explosions: list(Explosion.t)
};