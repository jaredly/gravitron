open Reprocessing;

module Bullet = {
  type t = {
    color: Reprocessing.colorT,
    size: float,
    pos: (float, float)
  };
};

module Enemy = {
  type t = {
    pos: (float, float),
    color: colorT,
    size: float,
    timer: int,
    bulletTime: int,
    shoot: (Reprocessing.glEnvT, t) => Bullet.t
  };
};

type state = {
  me: (float, float),
  enemies: list(Enemy.t),
  bullets: list(Bullet.t),
};

let shoot = (~color, ~size, env, self) => {Bullet.color, size, pos: self.Enemy.pos};

let simple_enemy = {
  Enemy.pos: (400., 400.),
  color: Constants.red,
  size: 15.,
  timer: 0,
  bulletTime: 60,
  shoot: shoot(~color=Reprocessing.Constants.green, ~size=5.),
};

let setup = (env) => {
  Env.size(~width=600, ~height=600, env);
  {
    me: (100., 100.),
    enemies: [simple_enemy],
    bullets: [],
  }
};

let circle = (~center, ~rad) => Reprocessing.Draw.ellipsef(~center, ~radx=rad, ~rady=rad);


let stepMe = (me, env) => {
  let theta = float_of_int(Env.frameCount(env)) /. 240. *. Constants.two_pi;
  let x = cos(theta) *. 200. +. 300.;
  let y = sin(theta) *. 200. +. 300.;
  (x, y);
};

let stepEnemy = (env, (bullets, enemies), enemy) => {
  open Enemy;
  if (enemy.timer === 0) {
    (
      [enemy.shoot(env, enemy), ...bullets],
      [{
        ...enemy,
        timer: enemy.bulletTime
      }, ...enemies]
    )
  } else {
    (bullets, [{...enemy, timer: enemy.timer - 1}, ...enemies])
  }
};

let stepEnemies = (enemies, bullets, env) => {
  List.fold_left(stepEnemy(env), (bullets, []), enemies);
};

let drawMe = (me, env) => {
  circle(~center=me, ~rad=20., env);
};

let drawEnemy = (env, enemy) => {
  open Enemy;
  Draw.fill(enemy.color, env);
  circle(~center=enemy.pos, ~rad=enemy.size, env);
};




let draw = (state, env) => {
  Draw.background(Utils.color(~r=199, ~g=217, ~b=229, ~a=255), env);
  Draw.fill(Utils.color(~r=41, ~g=166, ~b=244, ~a=255), env);
  let me = stepMe(state.me, env);
  let (bullets, enemies) = stepEnemies(state.enemies, state.bullets, env);
  drawMe(me, env);
  List.iter(drawEnemy(env), enemies);
  {...state, me, bullets, enemies}
};

run(~setup, ~draw, ());