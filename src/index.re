open Reprocessing;

type pos = (float, float);

type vec = {
  mag: float,
  theta: float,
};

let v0 = {mag: 0., theta: 0.};

let dx = ({theta, mag}) => cos(theta) *. mag;
let dy = ({theta, mag}) => sin(theta) *. mag;

let vecToPos = (vec) => (dx(vec), dy(vec));

let vecFromPos = ((dx, dy)) => {mag: sqrt(dx *. dx +. dy *. dy), theta: atan2(dy, dx)};

let dist = ((dx, dy)) => sqrt(dx *. dx +. dy *. dy);

let thetaToward = ((x0, y0), (x1, y1)) => atan2(y1 -. y0, x1 -. x0);

let posAdd = ((x0, y0), (x1, y1)) => (x0 +. x1, y0 +. y1);
let posSub = ((x0, y0), (x1, y1)) => (x0 -. x1, y0 -. y1);

let vecAdd = (v1, v2) => vecFromPos(posAdd(vecToPos(v1), vecToPos(v2)));

/* let vecToward = ((x0, y0), (x1, y1)) => vecFromPos((x1 -. x0, y1 -. y0)); */
let vecToward = (p1, p2) => vecFromPos(posSub(p2, p1));

module Player = {
  type t = {
    pos,
    vel: vec,
    acc: vec,
    size: float,
  };
};

module Bullet = {
  type t = {
    color: Reprocessing.colorT,
    size: float,
    vel: vec,
    acc: vec,
    pos,
  };
};

module Enemy = {
  type t = {
    pos,
    color: colorT,
    size: float,
    timer: int,
    id: int,
    bulletTime: int,
    shoot: (Reprocessing.glEnvT, t, Player.t) => Bullet.t
  };
};

type state = {
  me: Player.t,
  enemies: list(Enemy.t),
  bullets: list(Bullet.t),
};

let posToward = (p1, p2, distance) => posAdd(p1, vecToPos({mag: distance, theta: thetaToward(p1, p2)}));

let shoot = (~color, ~size, ~vel, env, self, player) => {
  open Enemy;
  let theta = thetaToward(self.pos, player.Player.pos);
  let pos = vecToPos({mag: self.size +. size +. 5., theta});
  {
    Bullet.color,
    size,
    pos: posAdd(self.pos, pos),
    vel: {mag: vel, theta},
    acc: v0,
  }
};

let simple_enemy = {
  Enemy.id: 0,
  pos: (400., 400.),
  color: Constants.red,
  size: 15.,
  timer: 100,
  bulletTime: 60,
  shoot: shoot(~color=Reprocessing.Constants.white, ~size=5., ~vel=2.),
};

let setup = (env) => {
  Env.size(~width=600, ~height=600, env);
  {
    me: {
      pos: (100., 100.),
      vel: v0,
      acc: v0,
      size: 20.,
    },
    enemies: [simple_enemy],
    bullets: [],
  }
};

let circle = (~center, ~rad) => Reprocessing.Draw.ellipsef(~center, ~radx=rad, ~rady=rad);

let stepMe = (me, env) => {
  open Player;
  let theta = float_of_int(Env.frameCount(env)) /. 240. *. Constants.two_pi;
  let x = cos(theta) *. 200. +. 300.;
  let y = sin(theta) *. 200. +. 300.;
  {...me, pos: (x, y)}
};

let stepEnemy = (env, me, (bullets, enemies), enemy) => {
  open Enemy;
  if (enemy.timer === 0) {
    (
      [enemy.shoot(env, enemy, me), ...bullets],
      [{
        ...enemy,
        timer: enemy.bulletTime
      }, ...enemies]
    )
  } else {
    (bullets, [{...enemy, timer: enemy.timer - 1}, ...enemies])
  }
};

let stepEnemies = (me, enemies, bullets, env) => {
  List.fold_left(stepEnemy(env, me), (bullets, []), enemies);
};

let stepBullets = (bullets, player) => {
  open Bullet;
  /* bullet on bullet collisions */
  List.map(
    (bullet) => {
      let {theta, mag} = vecToward(bullet.pos, player.Player.pos);
      if (mag < bullet.size +. player.Player.size) {
        print_endline("Dead~");
      };
      let acc = {theta, mag: 20. /. mag};
      let vel = vecAdd(bullet.vel, acc);
      let pos = posAdd(bullet.pos, vecToPos(vel));
      {...bullet, acc, vel, pos}
    },
    bullets
  )
};

let scale = d => sqrt(d);

let drawOnScreen = (~center as (x, y), ~rad, env) => {
  let height = Env.height(env) |> float_of_int;
  let width = Env.width(env) |> float_of_int;
  Draw.strokeWeight(2, env);
  if (x +. rad < 0.) {
    if (y +. rad < 0.) {
      Draw.linef(~p1=(0., 0.), ~p2=(scale(-.x), scale(-.y)), env);
    } else if (y -. rad > height) {
      Draw.linef(~p1=(0., height), ~p2=(scale(-.x), height -. scale(y -. height)), env);
    } else {
      Draw.linef(~p1=(0., y), ~p2=(scale(-. x), y), env);
    }
  } else if (x -. rad > width) {
    if (y +. rad < 0.) {
      Draw.linef(~p1=(width, 0.), ~p2=(width -. scale(x -. width), scale(-.y)), env);
    } else if (y -. rad > height) {
      Draw.linef(~p1=(width, height), ~p2=(width -. scale(x -. width), height -. scale(y -. height)), env);
    } else {
      let w = scale(x -. width);
      Draw.linef(~p1=(width -. w, y), ~p2=(width, y), env);
    }
  } else if (y +. rad < 0.) {
    let h = scale(-. y);
    Draw.linef(~p1=(x, 0.), ~p2=(x, h), env);
  } else if (y -. rad > height) {
    let h = scale(y -. height);
    Draw.linef(~p1=(x, height -. h), ~p2=(x, height), env);
  } else {
    circle(~center=(x, y), ~rad, env);
  }
};

let drawMe = (me, env) => {
  open Player;
  Draw.fill(Constants.green, env);
  Draw.stroke(Constants.green, env);
  drawOnScreen(~center=me.pos, ~rad=me.size, env);
};

let drawEnemy = (env, enemy) => {
  open Enemy;
  Draw.fill(enemy.color, env);
  Draw.stroke(enemy.color, env);
  /* circle(~center=enemy.pos, ~rad=enemy.size, env); */
  drawOnScreen(~center=enemy.pos, ~rad=enemy.size, env);
};

let drawBullet = (env, bullet) => {
  open Bullet;
  Draw.fill(bullet.color, env);
  Draw.stroke(bullet.color, env);
  /* circle(~center=bullet.pos, ~rad=bullet.size, env); */
  drawOnScreen(~center=bullet.pos, ~rad=bullet.size, env);
};


let draw = ({me, enemies, bullets} as state, env) => {
  Draw.background(Constants.black, env);

  let me = stepMe(me, env);
  let (bullets, enemies) = stepEnemies(me, enemies, bullets, env);
  let bullets = stepBullets(bullets, me);

  drawMe(me, env);
  List.iter(drawEnemy(env), enemies);
  List.iter(drawBullet(env), bullets);
  {...state, me, bullets, enemies}
};

run(~setup, ~draw, ());