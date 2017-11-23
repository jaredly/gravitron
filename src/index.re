open Reprocessing;

type pos = (float, float);

type vec = {
  mag: float,
  theta: float
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

let withAlpha = ({Reprocessing_Common.r, g, b, a}, alpha) => {
  Reprocessing_Common.r,
  g,
  b,
  a: a *. alpha
};

module Player = {
  type t = {
    pos,
    color: colorT,
    vel: vec,
    acc: vec,
    size: float
  };
};

module Bullet = {
  type t = {
    color: Reprocessing.colorT,
    size: float,
    vel: vec,
    acc: vec,
    pos
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

module Explosion = {
  type t = {
    pos,
    color: colorT,
    timer: int,
    totalTime: int,
    size: float
  };
};

type status =
  /* | Start */
  | Running
  | Dead(int);

type state = {
  status,
  me: Player.t,
  enemies: list(Enemy.t),
  bullets: list(Bullet.t),
  explosions: list(Explosion.t)
};

let posToward = (p1, p2, distance) =>
  posAdd(p1, vecToPos({mag: distance, theta: thetaToward(p1, p2)}));

let shoot = (~color, ~size, ~vel, env, self, player) => {
  open Enemy;
  let theta = thetaToward(self.pos, player.Player.pos);
  let pos = vecToPos({mag: self.size +. size +. 5., theta});
  {Bullet.color, size, pos: posAdd(self.pos, pos), vel: {mag: vel, theta}, acc: v0}
};

let simple_enemy = {
  Enemy.id: 0,
  pos: (400., 400.),
  color: Constants.red,
  size: 20.,
  timer: 200,
  bulletTime: 120,
  shoot: shoot(~color=Reprocessing.Constants.white, ~size=5., ~vel=2.)
};

let newGame = {
  status: Running,
  me: {pos: (100., 100.), color: Constants.green, vel: v0, acc: v0, size: 15.},
  enemies: [simple_enemy],
  bullets: [],
  explosions: []
};

let setup = (env) => {
  Env.size(~width=600, ~height=600, env);
  newGame
};

let circle = (~center, ~rad) => Reprocessing.Draw.ellipsef(~center, ~radx=rad, ~rady=rad);

let speed = 0.3;

let arrowAccs = [
  (Events.Left, vecFromPos((-. speed, 0.))),
  (Events.Up, vecFromPos((0., -. speed))),
  (Events.Down, vecFromPos((0., speed))),
  (Events.Right, vecFromPos((speed, 0.)))
];

let stepMe = ({me} as state, env) => {
  open Player;
  let vel =
    List.fold_left(
      (acc, (key, acc')) => Env.key(key, env) ? vecAdd(acc, acc') : acc,
      me.vel,
      arrowAccs
    );
  let vel =
    vel.mag > 7. ?
      {...vel, mag: 7.} : vel.mag < 0.01 ? {...vel, mag: 0.} : {...vel, mag: vel.mag *. 0.98};
  let pos = posAdd(me.pos, vecToPos(vel));
  {...state, me: {...me, pos, vel}}
};

let playerExplosion = (player) =>
  Player.{
    Explosion.pos: player.pos,
    size: player.size *. 2.,
    color: player.color,
    timer: 60,
    totalTime: 60
  };

let enemyExplosion = (enemy) =>
  Enemy.{
    Explosion.pos: enemy.pos,
    size: enemy.size *. 2.,
    color: enemy.color,
    timer: 60,
    totalTime: 60
  };

let bulletExplosion = (item) =>
  Bullet.{
    Explosion.pos: item.pos,
    size: item.size *. 2.,
    color: item.color,
    timer: 60,
    totalTime: 60
  };

let collides = (p1, p2, d) => dist(posSub(p1, p2)) <= d;

let stepEnemy = (env, state, enemy) =>
  Enemy.(
    if (collides(enemy.pos, state.me.Player.pos, enemy.size +. state.me.Player.size)) {
      {
        ...state,
        status: Dead(100),
        explosions: [playerExplosion(state.me), enemyExplosion(enemy), ...state.explosions]
      }
    } else if (enemy.timer === 0) {
      {
        ...state,
        bullets: [enemy.shoot(env, enemy, state.me), ...state.bullets],
        enemies: [{...enemy, timer: enemy.bulletTime}, ...state.enemies]
      }
    } else {
      {...state, enemies: [{...enemy, timer: enemy.timer - 1}, ...state.enemies]}
    }
  );

let stepEnemies = (state, env) =>
  List.fold_left(stepEnemy(env), {...state, enemies: []}, state.enemies);

let moveBullet = (bullet) => Bullet.{...bullet, pos: posAdd(bullet.pos, vecToPos(bullet.vel))};

let bulletToBullet = (bullet, bullets, explosions) => {
  let (removed, bullets, explosions) =
    List.fold_left(
      ((removed, bullets, explosions), other) =>
        Bullet.(
          removed ?
            (true, [other, ...bullets], explosions) :
            collides(bullet.pos, other.pos, bullet.size +. other.size) ?
              (true, bullets, [bulletExplosion(bullet), bulletExplosion(other), ...explosions]) :
              (false, [other, ...bullets], explosions)
        ),
      (false, [], explosions),
      bullets
    );
  if (removed) {
    (bullets, explosions)
  } else {
    ([bullet, ...bullets], explosions)
  }
};

let bulletToEnemiesAndBullets = (bullet, state) => {
  let (hit, enemies, explosions) =
    List.fold_left(
      ((hit, enemies, explosions), enemy) =>
        hit ?
          (hit, [enemy, ...enemies], explosions) :
          (
            if (collides(enemy.Enemy.pos, bullet.Bullet.pos, enemy.Enemy.size +. bullet.Bullet.size)) {
              (true, enemies, [enemyExplosion(enemy), bulletExplosion(bullet), ...explosions])
            } else {
              (false, [enemy, ...enemies], explosions)
            }
          ),
      (false, [], state.explosions),
      state.enemies
    );
  if (hit) {
    {...state, enemies, explosions}
  } else {
    let (bullets, explosions) = bulletToBullet(bullet, state.bullets, state.explosions);
    {...state, bullets, explosions}
  }
};

let stepBullets = (state) => {
  open Bullet;
  let player = state.me;
  /* bullet on bullet collisions */
  List.fold_left(
    (state, bullet) =>
      switch state.status {
      | Dead(_) => bulletToEnemiesAndBullets(moveBullet(bullet), state)
      | Running =>
        let {theta, mag} = vecToward(bullet.pos, player.Player.pos);
        if (mag < bullet.size +. player.Player.size) {
          {
            ...state,
            status: Dead(100),
            explosions: [playerExplosion(player), bulletExplosion(bullet), ...state.explosions]
          }
        } else {
          let acc = {theta, mag: 20. /. mag};
          let vel = vecAdd(bullet.vel, acc);
          let pos = posAdd(bullet.pos, vecToPos(vel));
          bulletToEnemiesAndBullets({...bullet, acc, vel, pos}, state)
        }
      },
    {...state, bullets: []},
    state.bullets
  )
};

let stepExplosions = (explosions) =>
  Explosion.(
    List.fold_left(
      (explosions, {timer} as explosion) =>
        timer > 1 ? [{...explosion, timer: timer - 1}, ...explosions] : explosions,
      [],
      explosions
    )
  );

let scale = (d) => sqrt(d);

let drawOnScreenLines = (~center as (x, y), ~rad, env) => {
  let height = Env.height(env) |> float_of_int;
  let width = Env.width(env) |> float_of_int;
  Draw.strokeWeight(2, env);
  if (x +. rad < 0.) {
    if (y +. rad < 0.) {
      Draw.linef(~p1=(0., 0.), ~p2=(scale(-. x), scale(-. y)), env)
    } else if (y -. rad > height) {
      Draw.linef(~p1=(0., height), ~p2=(scale(-. x), height -. scale(y -. height)), env)
    } else {
      Draw.linef(~p1=(0., y), ~p2=(scale(-. x), y), env)
    }
  } else if (x -. rad > width) {
    if (y +. rad < 0.) {
      Draw.linef(~p1=(width, 0.), ~p2=(width -. scale(x -. width), scale(-. y)), env)
    } else if (y -. rad > height) {
      Draw.linef(
        ~p1=(width, height),
        ~p2=(width -. scale(x -. width), height -. scale(y -. height)),
        env
      )
    } else {
      let w = scale(x -. width);
      Draw.linef(~p1=(width -. w, y), ~p2=(width, y), env)
    }
  } else if (y +. rad < 0.) {
    let h = scale(-. y);
    Draw.linef(~p1=(x, 0.), ~p2=(x, h), env)
  } else if (y -. rad > height) {
    let h = scale(y -. height);
    Draw.linef(~p1=(x, height -. h), ~p2=(x, height), env)
  } else {
    circle(~center=(x, y), ~rad, env)
  }
};

let rect = (~center as (x, y), ~w, ~h, env) =>
  Draw.rectf(~pos=(x -. w /. 2., y -. h /. 2.), ~width=w, ~height=h, env);

/** TODO maybe draw off-screen indicators as partially transparent? */
let drawOnScreen = (~color, ~center as (x, y), ~rad, env) => {
  let height = Env.height(env) |> float_of_int;
  let width = Env.width(env) |> float_of_int;
  Draw.fill(withAlpha(color, 0.6), env);
  if (x +. rad < 0.) {
    if (y +. rad < 0.) {
      rect(~center=(0., 0.), ~w=4., ~h=4., env)
    } else if (y -. rad > height) {
      rect(~center=(0., height), ~w=4., ~h=4., env)
    } else {
      rect(~center=(0., y), ~w=4., ~h=scale(-. x), env)
    }
  } else if (x -. rad > width) {
    if (y +. rad < 0.) {
      rect(~center=(width, 0.), ~w=4., ~h=4., env)
    } else if (y -. rad > height) {
      rect(~center=(width, height), ~w=4., ~h=4., env)
    } else {
      let w = scale(x -. width);
      rect(~center=(width, y), ~w=4., ~h=w, env)
    }
  } else if (y +. rad < 0.) {
    let h = scale(-. y);
    rect(~center=(x, 0.), ~w=h, ~h=4., env)
  } else if (y -. rad > height) {
    let h = scale(y -. height);
    rect(~center=(x, height), ~w=h, ~h=4., env)
  } else {
    Draw.fill(color, env);
    circle(~center=(x, y), ~rad, env)
  }
};

let drawMe = (me, env) =>
  Player.(drawOnScreen(~color=me.color, ~center=me.pos, ~rad=me.size, env));

let drawEnemy = (env, enemy) =>
  Enemy.(drawOnScreen(~color=enemy.color, ~center=enemy.pos, ~rad=enemy.size, env));

let drawBullet = (env, bullet) =>
  Bullet.(drawOnScreen(~color=bullet.color, ~center=bullet.pos, ~rad=bullet.size, env));

let drawExplosion = (env, explosion) => {
  open Explosion;
  let faded = float_of_int(explosion.timer) /. float_of_int(explosion.totalTime);
  Draw.fill(withAlpha(explosion.color, faded), env);
  let size = (1.0 -. 0.8 *. faded) *. explosion.size;
  circle(~center=explosion.pos, ~rad=size, env)
};

let draw = (state, env) =>
  switch state.status {
  | Dead(0) => newGame
  | _ =>
    let state = {
      ...state,
      status:
        switch state.status {
        | Dead(n) => Dead(n - 1)
        | Running => Running
        }
    };
    let state = state.status === Running ? stepMe(state, env) : state;
    let state = stepEnemies(state, env);
    let state = {...state, explosions: stepExplosions(state.explosions)};
    let state = stepBullets(state);
    Draw.background(Constants.black, env);
    if (state.status === Running) {
      drawMe(state.me, env)
    };
    List.iter(drawEnemy(env), state.enemies);
    List.iter(drawBullet(env), state.bullets);
    List.iter(drawExplosion(env), state.explosions);
    state
  };

run(~setup, ~draw, ());