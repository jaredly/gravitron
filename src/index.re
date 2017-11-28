open Reprocessing;

module Utils = {
  type pos = (float, float);
  type vec = {
    mag: float,
    theta: float
  };
  /** current, max */
  type counter = (float, float);
  type counteri = (int, int);
  let counter = (num) => (0., num);
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
  let vecToward = (p1, p2) => vecFromPos(posSub(p2, p1));
  let scaleVec = ({mag, theta}, scale) => {mag: mag *. scale, theta};
  let scalePos = ((x, y), scale) => (x *. scale, y *. scale);
  let withAlpha = ({Reprocessing_Common.r, g, b, a}, alpha) => {
    Reprocessing_Common.r,
    g,
    b,
    a: a *. alpha
  };
};

open Utils;

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

type enemy =
  | SimpleShooter(int)
  | DoubleShooter(int, float)
  | Splitter;

module Enemy = {
  type t = {
    pos,
    color: colorT,
    size: float,
    timer: counter,
    warmup: counter,
    health: counteri,
    shoot: (Reprocessing.glEnvT, t, Player.t) => Bullet.t
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

let shoot = (~color, ~size, ~vel, env, self, player) => {
  open Enemy;
  let theta = thetaToward(self.pos, player.Player.pos);
  let pos = vecToPos({mag: self.size +. size +. 5., theta});
  {Bullet.color, size, pos: posAdd(self.pos, pos), vel: {mag: vel, theta}, acc: v0, damage: 10}
};

let circle = (~center, ~rad) => Reprocessing.Draw.ellipsef(~center, ~radx=rad, ~rady=rad);

type status =
  | Initial
  | Running
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

let levels = [|
  [
    {
      Enemy.pos: (600., 600.),
      color: Constants.red,
      size: 20.,
      timer: (200., 300.),
      warmup: (0., 50.),
      health: (1, 1),
      shoot: shoot(~color=Reprocessing.Constants.white, ~size=5., ~vel=2.)
    }
  ],
  [
    {
      pos: (200., 200.),
      color: Constants.red,
      size: 20.,
      timer: (200., 300.),
      warmup: (0., 50.),
      health: (1, 1),
      shoot: shoot(~color=Reprocessing.Constants.white, ~size=5., ~vel=2.)
    },
    {
      pos: (600., 600.),
      color: Constants.red,
      size: 20.,
      timer: (200., 300.),
      warmup: (0., 50.),
      health: (1, 1),
      shoot: shoot(~color=Reprocessing.Constants.white, ~size=5., ~vel=2.)
    }
  ],
  [
    {
      pos: (600., 600.),
      color: Reprocessing_Constants.blue,
      size: 20.,
      timer: (0., 100.),
      warmup: (0., 50.),
      health: (1, 1),
      shoot: shoot(~color=Reprocessing.Constants.white, ~size=5., ~vel=2.)
    }
  ],
  [
    {
      pos: (600., 600.),
      color: Reprocessing_Constants.blue,
      size: 20.,
      timer: (0., 100.),
      warmup: (0., 50.),
      health: (1, 1),
      shoot: shoot(~color=Reprocessing.Constants.white, ~size=5., ~vel=2.)
    },
    {
      pos: (200., 200.),
      color: Reprocessing_Constants.blue,
      size: 20.,
      timer: (0., 100.),
      warmup: (0., 50.),
      health: (1, 1),
      shoot: shoot(~color=Reprocessing.Constants.white, ~size=5., ~vel=2.)
    }
  ],
  [
    {
      pos: (600., 600.),
      color: Reprocessing_Constants.blue,
      size: 20.,
      timer: (0., 100.),
      warmup: (0., 50.),
      health: (1, 1),
      shoot: shoot(~color=Reprocessing.Constants.white, ~size=5., ~vel=2.)
    },
    {
      pos: (200., 600.),
      color: Reprocessing_Constants.blue,
      size: 20.,
      timer: (0., 100.),
      warmup: (0., 50.),
      health: (1, 1),
      shoot: shoot(~color=Reprocessing.Constants.white, ~size=5., ~vel=2.)
    },
    {
      pos: (600., 200.),
      color: Reprocessing_Constants.blue,
      size: 20.,
      timer: (0., 100.),
      warmup: (0., 50.),
      health: (1, 1),
      shoot: shoot(~color=Reprocessing.Constants.white, ~size=5., ~vel=2.)
    },
    {
      pos: (200., 200.),
      color: Reprocessing_Constants.blue,
      size: 20.,
      timer: (0., 100.),
      warmup: (0., 50.),
      health: (1, 1),
      shoot: shoot(~color=Reprocessing.Constants.white, ~size=5., ~vel=2.)
    }
  ]
|];

let phoneScale = 2.;

let makePhoneLevels = (env) => {
  let w = float_of_int(Env.width(env)) *. phoneScale;
  let h = float_of_int(Env.height(env)) *. phoneScale;
  [|
    [
      {
        Enemy.pos: (w /. 2., w /. 2.),
        color: Constants.red,
        size: 20.,
        timer: (200., 300.),
        warmup: (0., 50.),
        health: (1, 1),
        shoot: shoot(~color=Reprocessing.Constants.white, ~size=5., ~vel=2.)
      }
    ],
    [
      {
        pos: (w /. 2., w /. 2.),
        color: Constants.red,
        size: 20.,
        timer: (200., 300.),
        warmup: (0., 50.),
        health: (1, 1),
        shoot: shoot(~color=Reprocessing.Constants.white, ~size=5., ~vel=2.)
      },
      {
        pos: (w /. 2., h -. w /. 2.),
        color: Constants.red,
        size: 20.,
        timer: (200., 300.),
        warmup: (0., 50.),
        health: (1, 1),
        shoot: shoot(~color=Reprocessing.Constants.white, ~size=5., ~vel=2.)
      }
    ],
/*
    [
         {
           pos: (w /. 2., w /. 2.),
           color: Reprocessing_Constants.blue,
           size: 20.,
           timer: (0., 100.),
           warmup: (0., 50.),
           health: (1,1),
           shoot: shoot(~color=Reprocessing.Constants.white, ~size=5., ~vel=2.)
         }
       ],
       [
         {
           pos: (w /. 2., w /. 2.),
           color: Reprocessing_Constants.blue,
           size: 20.,
           timer: (0., 100.),
           warmup: (0., 50.),
           health: (1,1),
           shoot: shoot(~color=Reprocessing.Constants.white, ~size=5., ~vel=2.)
         },
         {
           pos: (w /. 2., h -. w /. 2.),
           color: Reprocessing_Constants.blue,
           size: 20.,
           timer: (0., 100.),
           warmup: (0., 50.),
           health: (1,1),
           shoot: shoot(~color=Reprocessing.Constants.white, ~size=5., ~vel=2.)
         }
       ],
       [
         {
           pos: (w /. 3., w /. 3.),
           color: Reprocessing_Constants.blue,
           size: 20.,
           timer: (0., 100.),
           warmup: (0., 50.),
           health: (1,1),
           shoot: shoot(~color=Reprocessing.Constants.white, ~size=5., ~vel=2.)
         },
         {
           pos: (w *. 2. /. 3., w /. 3.),
           color: Reprocessing_Constants.blue,
           size: 20.,
           timer: (0., 100.),
           warmup: (0., 50.),
           health: (1,1),
           shoot: shoot(~color=Reprocessing.Constants.white, ~size=5., ~vel=2.)
         },
         {
           pos: (w /. 3., h -. w /. 3.),
           color: Reprocessing_Constants.blue,
           size: 20.,
           timer: (0., 100.),
           warmup: (0., 50.),
           health: (1,1),
           shoot: shoot(~color=Reprocessing.Constants.white, ~size=5., ~vel=2.)
         },
         {
           pos: (w *. 2. /. 3., h -. w /. 3.),
           color: Reprocessing_Constants.blue,
           size: 20.,
           timer: (0., 100.),
           warmup: (0., 50.),
           health: (1,1),
           shoot: shoot(~color=Reprocessing.Constants.white, ~size=5., ~vel=2.)
         }
       ]
       */
  |]
};

let fullPlayerHealth = 100;

let isPhone = Reprocessing.target == "native-ios";

let getPhonePos = (env) => {
  let w = float_of_int(Env.width(env)) *. phoneScale;
  let h = float_of_int(Env.height(env)) *. phoneScale;
  (w /. 2., h -. w /. 2.)
};

let newGame = (env) => {
  let levels = isPhone ? makePhoneLevels(env) : levels;
  let font =
    Draw.loadFont(~filename="./assets/SFCompactRounded-Black-48.fnt", ~isPixel=false, env);
  /* let font = Draw.loadFont(~filename="./assets/font.fnt", ~isPixel=false, env); */
  {
    status: Initial,
    level: 0,
    levels,
    font,
    me: {
      health: fullPlayerHealth,
      lives: 3,
      pos: isPhone ? getPhonePos(env) : (100., 100.),
      color: Constants.green,
      vel: v0,
      acc: v0,
      size: 15.
    },
    enemies: levels[0],
    bullets: [],
    explosions: []
  }
};

let setup = (env) => {
  let (w, h) = isPhone ? (Env.windowWidth(env), Env.windowHeight(env)) : (800, 800);
  Env.size(~width=w, ~height=h, env);
  print_endline(string_of_int(Env.width(env)));
  newGame(env)
};

let arrowAccs = {
  let speed = 0.3;
  [
    (Events.Left, vecFromPos((-. speed, 0.))),
    (Events.Up, vecFromPos((0., -. speed))),
    (Events.Down, vecFromPos((0., speed))),
    (Events.Right, vecFromPos((speed, 0.)))
  ]
};

let floatPos = ((a, b)) => (float_of_int(a), float_of_int(b));

let clampVec = (vel, min, max, fade) =>
  vel.mag > max ?
    {...vel, mag: max} : vel.mag < min ? {...vel, mag: 0.} : {...vel, mag: vel.mag *. fade};

let springToward = (p1, p2, scale) => {
  let vec = vecToward(p1, p2);
  {...vec, mag: vec.mag *. scale}
};

let stepMeMouse = ({me} as state, env) =>
  Player.(
    if (Env.mousePressed(env)) {
      let delta = Env.deltaTime(env) *. 1000. /. 16.;
      let mousePos = floatPos(Reprocessing_Env.mouse(env));
      let mousePos = isPhone ? scalePos(mousePos, phoneScale) : mousePos;
      let vel = springToward(me.pos, mousePos, 0.1);
      let vel = clampVec(vel, 0.01, 7., 0.98);
      let pos = posAdd(me.pos, vecToPos(scaleVec(vel, delta)));
      {...state, me: {...me, pos, vel}}
    } else {
      state
    }
  );

let joystickPos = (env) => {
  let w = Env.width(env) |> float_of_int;
  let h = Env.height(env) |> float_of_int;
  (w -. 75., h -. 75.)
};

let stepMeJoystick = ({me} as state, env) =>
  Player.(
    if (Env.mousePressed(env)) {
      let vel = springToward(joystickPos(env), floatPos(Reprocessing_Env.mouse(env)), 0.1);
      let vel = clampVec(vel, 1., 7., 0.98);
      let delta = Env.deltaTime(env) *. 1000. /. 16.;
      let pos = posAdd(me.pos, vecToPos(scaleVec(vel, delta)));
      {...state, me: {...me, pos, vel}}
    } else {
      state
    }
  );

let stepMeKeys = ({me} as state, env) => {
  open Player;
  let vel =
    List.fold_left(
      (acc, (key, acc')) => Env.key(key, env) ? vecAdd(acc, acc') : acc,
      me.vel,
      arrowAccs
    );
  let vel = clampVec(vel, 0.01, 7., 0.98);
  let delta = Env.deltaTime(env) *. 1000. /. 16.;
  let pos = posAdd(me.pos, vecToPos(scaleVec(vel, delta)));
  {...state, me: {...me, pos, vel}}
};

let collides = (p1, p2, d) => dist(posSub(p1, p2)) <= d;

let stepTimer = ((current, max), env) => {
  let time = Reprocessing_Env.deltaTime(env) *. 1000. /. 16.;
  if (current +. time >= max) {
    ((max, max), true)
  } else {
    ((current +. time, max), false)
  }
};

let loopTimer = ((current, max), env) => {
  let time = Reprocessing_Env.deltaTime(env) *. 1000. /. 16.;
  if (current +. time >= max) {
    ((0., max), true)
  } else {
    ((current +. time, max), false)
  }
};

let countDown = ((current, max)) =>
  if (current <= 1) {
    ((0, max), true)
  } else {
    ((current - 1, max), false)
  };

module Steps = {
  let stepEnemy = (env, state, enemy) => {
    open Enemy;
    let (warmup, loaded) = stepTimer(enemy.warmup, env);
    if (! loaded) {
      {...state, enemies: [{...enemy, warmup}, ...state.enemies]}
    } else if (collides(enemy.pos, state.me.Player.pos, enemy.size +. state.me.Player.size)) {
      {
        ...state,
        status: Dead(100),
        explosions: [playerExplosion(state.me), enemyExplosion(enemy), ...state.explosions]
      }
    } else {
      let (timer, looped) = loopTimer(enemy.timer, env);
      if (looped) {
        {
          ...state,
          bullets: [enemy.shoot(env, enemy, state.me), ...state.bullets],
          enemies: [{...enemy, warmup, timer}, ...state.enemies]
        }
      } else {
        {...state, enemies: [{...enemy, warmup, timer}, ...state.enemies]}
      }
    }
  };
  let stepEnemies = (state, env) =>
    List.fold_left(stepEnemy(env), {...state, enemies: []}, state.enemies);
  let moveBullet = (bullet, env) => {
    let delta = Env.deltaTime(env) *. 1000. /. 16.;
    Bullet.{...bullet, pos: posAdd(bullet.pos, vecToPos(scaleVec(bullet.vel, delta)))}
  };
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
              if (collides(
                    enemy.Enemy.pos,
                    bullet.Bullet.pos,
                    enemy.Enemy.size +. bullet.Bullet.size
                  )) {
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
  let stepBullets = (state, env) => {
    open Bullet;
    let player = state.me;
    List.fold_left(
      (state, bullet) =>
        switch state.status {
        | Initial
        | Won(_)
        | Dead(_) => bulletToEnemiesAndBullets(moveBullet(bullet, env), state)
        | Running =>
          let {theta, mag} = vecToward(bullet.pos, player.Player.pos);
          if (mag < bullet.size +. player.Player.size) {
            if (state.me.Player.health - bullet.damage > 0) {
              {
                ...state,
                me: {...state.me, health: state.me.Player.health - bullet.damage},
                explosions: [bulletExplosion(bullet), ...state.explosions]
              }
            } else {
              {
                /* if (state.me.Player.lives <= 1) */
                ...state,
                status: Dead(100),
                explosions: [playerExplosion(player), bulletExplosion(bullet), ...state.explosions]
                /* } else {
                   ...state,
                   me: {...state.me, lives: state.me.Player.lives - 1, health: fullPlayerHealth},
                   explosions: [bulletExplosion(bullet), ...state.explosions] */
              }
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
  let stepExplosions = (explosions, env) =>
    Explosion.(
      List.fold_left(
        (explosions, {timer} as explosion) => {
          let (timer, finished) = stepTimer(timer, env);
          finished ? explosions : [{...explosion, timer}, ...explosions]
        },
        [],
        explosions
      )
    );
};

let flDiv = (a, b) => float_of_int(a) /. float_of_int(b);

module Drawing = {
  let rect = (~center as (x, y), ~w, ~h, env) =>
    Draw.rectf(~pos=(x -. w /. 2., y -. h /. 2.), ~width=w, ~height=h, env);
  let scale = (d) => sqrt(d);
  let drawOnScreen = (~color, ~center as (x, y), ~rad, ~stroke=false, env) => {
    let height = Env.height(env) |> float_of_int;
    let width = Env.width(env) |> float_of_int;
    let (height, width) = isPhone ? (height *. phoneScale, width *. phoneScale) : (height, width);
    Draw.fill(withAlpha(color, 0.6), env);
    Draw.noStroke(env);
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
      if (stroke) {
        Draw.stroke(color, env);
        Draw.strokeWeight(3, env);
        Draw.noFill(env)
      } else {
        Draw.fill(color, env);
        Draw.noStroke(env)
      };
      circle(~center=(x, y), ~rad, env)
    }
  };
  let drawStatus = (state, env) => {
    open Player;
    let percent = flDiv(state.me.Player.health, fullPlayerHealth);
    Draw.strokeWeight(1, env);
    Draw.stroke(Constants.white, env);
    Draw.noFill(env);
    Draw.rect(~pos=(10, 10), ~width=100, ~height=10, env);
    Draw.fill(Constants.white, env);
    Draw.noStroke(env);
    Draw.rect(~pos=(10, 10), ~width=int_of_float(100. *. percent), ~height=10, env);
    for (i in 0 to state.me.lives) {
      circle(~center=(float_of_int(i * 15 + 100 + 20), 15.), ~rad=5., env)
    }
  };
  let drawJoystick = (env) => {
    Draw.fill(Constants.green, env);
    Draw.noStroke(env);
    circle(~center=joystickPos(env), ~rad=5., env);
    Draw.stroke(Constants.green, env);
    Draw.noFill(env);
    circle(~center=joystickPos(env), ~rad=35., env)
  };
  let drawMe = (me, env) =>
    Player.(drawOnScreen(~color=me.color, ~center=me.pos, ~rad=me.size, env));
  let fldiv = (a, b) => float_of_int(a) /. float_of_int(b);
  let drawEnemy = (env, enemy) => {
    open Enemy;
    let (warmup, max) = enemy.warmup;
    drawOnScreen(
      ~color=enemy.color,
      ~center=enemy.pos,
      ~rad=enemy.size *. warmup /. max,
      ~stroke=true,
      env
    );
    if (warmup === max) {
      let loaded = fst(enemy.timer) /. snd(enemy.timer);
      Draw.stroke(withAlpha(Constants.white, 0.4), env);
      Draw.strokeWeight(5, env);
      Draw.arcf(
        ~center=enemy.pos,
        ~radx=enemy.size,
        ~rady=enemy.size,
        ~start=0.,
        ~stop=Constants.two_pi *. loaded,
        ~isOpen=true,
        ~isPie=false,
        env
      );
      Draw.noStroke(env)
    }
  };
  let drawBullet = (env, bullet) =>
    Bullet.(drawOnScreen(~color=bullet.color, ~center=bullet.pos, ~rad=bullet.size, env));
  let drawExplosion = (env, explosion) => {
    open Explosion;
    let (current, total) = explosion.timer;
    let faded = 1. -. current /. total;
    Draw.fill(withAlpha(explosion.color, faded), env);
    Draw.noStroke(env);
    let size = (1.5 -. 0.5 *. faded) *. explosion.size;
    circle(~center=explosion.pos, ~rad=size, env)
  };
};

let centerText = (~pos as (x, y), ~font, ~body, env) => {
  switch font^ {
  | None => ()
  | Some(innerFont) =>
    let width = Reprocessing_Font.Font.calcStringWidth(env, innerFont, body);
    Draw.text(~font=font, ~body, ~pos=(x - width / 2, y), env);
  };
};

let draw = (state, env) =>
  switch state.status {
  | Dead(0) =>
    if (state.me.Player.lives > 0) {
      {
        ...state,
        status: Running,
        me: {...state.me, Player.health: fullPlayerHealth, lives: state.me.Player.lives - 1},
        enemies: state.levels[state.level],
        explosions: [],
        bullets: []
      }
    } else {
      newGame(env)
    }
  | Initial =>
    Draw.background(Constants.black, env);
    let w = Env.width(env) / 2;
    let h = Env.height(env) / 2 - 50;
    centerText(~font=state.font, ~body="Gravitron", ~pos=(w, h), env);
    state
  | Won(animate) =>
    Draw.background(Constants.black, env);
    let w = Env.width(env) / 2;
    let h = Env.height(env) / 2 - 50;
    let y0 = -50.;

    let percent = animate /. 100.;
    let y = (float_of_int(h) -. y0) *. percent +. y0 |> int_of_float;
    /* TODO ease in or sth */

    centerText(~font=state.font, ~body="You won!", ~pos=(w, y), env);
    let delta = Env.deltaTime(env) *. 1000. /. 16.;
    if (animate +. delta < 100.) {
      {...state, status: Won(animate +. delta)}
    } else {
      {...state, status: Won(100.)}
    }
  | _ =>
    let state = {
      ...state,
      status:
        switch state.status {
        | Dead(n) => Dead(n - 1)
        | t => t
        }
    };
    let state =
      state.status === Running ?
        isPhone ? stepMeMouse(state, env) : stepMeKeys(state, env) : state;
    open Steps;
    let state = stepEnemies(state, env);
    let state = {...state, explosions: stepExplosions(state.explosions, env)};
    let state = stepBullets(state, env);
    let state =
      state.enemies !== [] || state.status !== Running ?
        state :
        state.level >= Array.length(state.levels) - 1 ?
          {...state, status: Won(0.)} :
          {...state, level: state.level + 1, enemies: state.levels[state.level + 1]};
    Draw.background(Constants.black, env);
    if (isPhone) {
      Draw.pushMatrix(env);
      Draw.scale(~x=1. /. phoneScale, ~y=1. /. phoneScale, env);
    };
    open Drawing;
    if (state.status === Running) {
      drawMe(state.me, env)
    };
    List.iter(drawEnemy(env), state.enemies);
    List.iter(drawBullet(env), state.bullets);
    List.iter(drawExplosion(env), state.explosions);
    if (isPhone) {
      Draw.popMatrix(env);
    };
    drawStatus(state, env);
    /* if (isPhone) {
      drawJoystick(env)
    }; */
    state
  };

run(~setup, ~draw, ~mouseDown=((state, env) => {
  switch (state.status) {
  | Won(animate) when animate >= 100. => newGame(env)
  | Initial => {...state, status: Running}
  | _ => state
  }
}), ());