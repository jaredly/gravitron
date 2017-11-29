open Reprocessing;

open MyUtils;

open GravShared;

let newGame = (env) => {
  let levels = isPhone ? GravLevels.makePhoneLevels(env) : GravLevels.levels;
  let font =
    Draw.loadFont(~filename="./assets/SFCompactRounded-Black-48.fnt", ~isPixel=false, env);
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

let centerText = (~pos as (x, y), ~font, ~body, env) =>
  switch font^ {
  | None => ()
  | Some(innerFont) =>
    let width = Reprocessing_Font.Font.calcStringWidth(env, innerFont, body);
    Draw.text(~font, ~body, ~pos=(x - width / 2, y), env)
  };

let drawState = (state, env) => {
    Draw.background(Constants.black, env);
    if (isPhone) {
      Draw.pushMatrix(env);
      Draw.scale(~x=1. /. phoneScale, ~y=1. /. phoneScale, env)
    };
    open GravDraw;
    if (state.status === Running || state.status === Paused) {
      drawMe(state.me, env)
    };
    List.iter(drawEnemy(env), state.enemies);
    List.iter(drawBullet(env), state.bullets);
    List.iter(drawExplosion(env), state.explosions);
    if (isPhone) {
      Draw.popMatrix(env)
    };
    drawStatus(state.me, env);
    /* if (isPhone) {
         drawJoystick(env)
       }; */
    state
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
  | Paused => {drawState(state, env); state}
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
    let y0 = (-50.);
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
    open GravStep;
    let state =
      state.status === Running ?
        isPhone ? stepMeMouse(state, env) : stepMeKeys(state, env) : state;
    let state = stepEnemies(state, env);
    let state = {...state, explosions: stepExplosions(state.explosions, env)};
    let state = stepBullets(state, env);
    let state =
      state.enemies !== [] || state.status !== Running ?
        state :
        state.level >= Array.length(state.levels) - 1 ?
          {...state, status: Won(0.)} :
          {...state, level: state.level + 1, enemies: state.levels[state.level + 1]};
    drawState(state, env);
  };

let newAtLevel = (env, level) => {
  let state = newGame(env);
  if (level >= Array.length(state.levels)) {
    state
  } else {
    {...state, status: Running, level, enemies: state.levels[level]}
  }
};

run(
  ~setup,
  ~draw,
  ~keyPressed=((state, env) => switch (Env.keyCode(env)) {
  | Events.R => newGame(env)
  | Events.Space => switch (state.status) {
    | Paused => {...state, status: Running}
    | Running => {...state, status: Paused}
    | _ => state
  }
  | Events.Num_1 => newAtLevel(env, 0)
  | Events.Num_2 => newAtLevel(env, 1)
  | Events.Num_3 => newAtLevel(env, 2)
  | Events.Num_4 => newAtLevel(env, 3)
  | Events.Num_5 => newAtLevel(env, 4)
  | Events.Num_6 => newAtLevel(env, 5)
  | Events.Num_7 => newAtLevel(env, 6)
  | Events.Num_8 => newAtLevel(env, 7)
  | Events.Num_9 => newAtLevel(env, 8)
  | _ => state
  }),
  ~mouseDown=
    (state, env) =>
      switch state.status {
      | Won(animate) when animate >= 100. => newGame(env)
      | Initial => {...state, status: Running}
      | _ => state
      },
  ()
);