open Reprocessing;
open MyUtils;
let module Utils = MyUtils;

open SharedTypes;

let deltaTime = (env) => Env.deltaTime(env) *. 1000. /. 16.;

let fullPlayerHealth = SharedTypes.Player.fullHealth;

let fakePhone = try {Sys.getenv("PHONE");true} { | Not_found => false };
let isPhone = Reprocessing.target == "native-ios" || Reprocessing.target == "native-android" || fakePhone;

let phoneScale = isPhone ? 1. : 1.;

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
  SharedTypes.Player.{
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

/* let shoot = (~behavior=Bullet.Normal, ~theta=0., (color, size, vel, damage), env, self, player) => {
  open Enemy;
  let theta = thetaToward(self.pos, player.Player.pos) +. theta;
  let pos = vecToPos({mag: self.size +. size +. 5., theta});
  {Bullet.color,
    behavior,
    warmup: (0., 20.),
    size, pos: posAdd(self.pos, pos), vel: {mag: vel, theta}, acc: v0, damage: damage}
}; */

let circle = (~center, ~rad) => Reprocessing.Draw.ellipsef(~center, ~radx=rad, ~rady=rad);


type status =
  | Running
  | Paused(float)
  | Dead(int);

type gameState = {
  status,
  hasMoved: bool,
  startTime: float,
  level: (int, int),
  /* stages: array(array(list(Enemy.t))), */
  levelTicker: float,
  me: SharedTypes.Player.t,
  enemies: list(Enemy.t),
  bullets: list(Bullet.t),
  explosions: list(Explosion.t),

  /* settings */
  wallType: wallType
};
type state = gameState;

let asteroidSplitVel = () => {
  let theta = Random.float(Constants.two_pi);
  (
    {theta, mag: 1.5 +. Random.float(1.)},
    {
      theta: theta -. Constants.pi +. Random.float(Constants.pi /. 2.),
      mag: 1.5 +. Random.float(1.)
    }
  )
};

let wallSize = 5.;

type offscreen = Left | Top | Right | Bottom | OnScreen;
let offscreen = ((x, y), w, h, size) => {
  let size = size + int_of_float(wallSize);
  let x = int_of_float(x);
  let y = int_of_float(y);
  if (x - size < 0) Left
  else if (y - size < 0) Top
  else if (x + size > w) Right
  else if (y + size > h) Bottom
  else OnScreen
};

let bounceVel = (vel, off) => {
  mag: off === OnScreen ? vel.mag : vel.mag *. 0.5,
  theta: switch off {
  | OnScreen => vel.theta
  | Left | Right => if (vel.theta < Constants.pi) {Constants.pi -. vel.theta} else { Constants.pi *. 3. -. vel.theta }
  | Top | Bottom => Constants.two_pi -. vel.theta
  }
};

let keepOnScreen = ((x, y), w, h, size) => {
  let size = size +. wallSize;
  (max(size, min(x, w -. size)), max(size, min(y, h -. size)))
};

let bouncePos = (wallType, vel, pos, w, h, delta, size) => {
  let off = offscreen(pos, w, h, int_of_float(size));
  switch (wallType, off) {
    | (Minimapped, _)
    | (_, OnScreen) => (vel, posAdd(pos, vecToPos(scaleVec(vel, delta))))
    | _ =>
      let vel = bounceVel(vel, off);
      (vel, keepOnScreen(posAdd(pos, vecToPos(scaleVec(vel, delta))), float_of_int(w), float_of_int(h), size))
  }
};

let floatPos = ((a, b)) => (float_of_int(a), float_of_int(b));

let clampVec = (vel, min, max, fade) =>
  vel.mag > max ?
    {...vel, mag: max} : vel.mag < min ? {...vel, mag: 0.} : {...vel, mag: vel.mag *. fade};

let springToward = (p1, p2, scale) => {
  let vec = vecToward(p1, p2);
  {...vec, mag: vec.mag *. scale}
};

let randomTarget = (w, h, size) => {
  let margin = size;
  (Random.float(w -. margin *. 2.) +. margin, Random.float(h -. margin *. 2.) +. margin)
};

