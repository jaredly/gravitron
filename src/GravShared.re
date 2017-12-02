open Reprocessing;
open MyUtils;
let module Utils = MyUtils;

open SharedTypes;

let fullPlayerHealth = 100;

let isPhone = Reprocessing.target == "native-ios";

let phoneScale = isPhone ? 2. : 1.;

let getPhonePos = (env) => {
  let w = float_of_int(Env.width(env)) *. phoneScale;
  let h = float_of_int(Env.height(env)) *. phoneScale;
  (w /. 2., h /. 2.)
};

let joystickPos = (env) => {
  let w = Env.width(env) |> float_of_int;
  let h = Env.height(env) |> float_of_int;
  (w -. 75., h -. 75.)
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

let shoot = (~behavior=Bullet.Normal, ~theta=0., (color, size, vel, damage), env, self, player) => {
  open Enemy;
  let theta = thetaToward(self.pos, player.Player.pos) +. theta;
  let pos = vecToPos({mag: self.size +. size +. 5., theta});
  {Bullet.color,
    behavior,
    warmup: (0., 20.),
    size, pos: posAdd(self.pos, pos), vel: {mag: vel, theta}, acc: v0, damage: damage}
};

let circle = (~center, ~rad) => Reprocessing.Draw.ellipsef(~center, ~radx=rad, ~rady=rad);


type status =
  | Running
  | Paused
  | Dead(int);

type gameState = {
  status,
  hasMoved: bool,
  level: int,
  levels: array(list(Enemy.t)),
  me: Player.t,
  enemies: list(Enemy.t),
  bullets: list(Bullet.t),
  explosions: list(Explosion.t)
};
type state = gameState;

type screen =
  | Welcome /* need state for buttons? maybe an animation tho */
  | Playing(gameState)
  | Done(bool, float) /* succeeded, animation! */
  | LevelEditor(option(int)) /* the index of the level being edited */
  ;
