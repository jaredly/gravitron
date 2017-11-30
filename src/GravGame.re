open Reprocessing;

open MyUtils;

open SharedTypes;

open GravShared;

let newGame = (env) => {
  let levels = isPhone ? GravLevels.makePhoneLevels(env) : GravLevels.levels;
  let font =
    Draw.loadFont(~filename="./assets/SFCompactRounded-Black-48.fnt", ~isPixel=false, env);
  {
    status: Running,
    level: 0,
    levels,
    font,
    me: {
      health: fullPlayerHealth,
      lives: 3,
      pos: getPhonePos(env),
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

let initialState = newGame;

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
  drawStatus(state.me, env)
};

let mainLoop = (ctx, state, env) => {
  open ScreenManager.Screen;
  switch state.status {
  | Dead(0) =>
    if (state.me.Player.lives > 0) {
      Same(ctx, {
        ...state,
        status: Running,
        me: {...state.me, Player.health: fullPlayerHealth, lives: state.me.Player.lives - 1},
        enemies: state.levels[state.level],
        explosions: [],
        bullets: []
      })
    } else {
      Transition(ctx, `Finished(false))
    }
  | Paused =>
    drawState(state, env);
    Same(ctx, state)
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
    drawState(state, env);
    state.enemies !== [] || state.status !== Running ?
      Same(ctx, state) :
      {
        let ctx = if (state.level > ctx.highestBeatenLevel) {
          Reprocessing.Env.saveUserData(~key="highest_beaten_level", ~value=state.level, env) |> ignore;
          {...ctx, highestBeatenLevel: state.level}
        } else {
          ctx
        };
        state.level >= Array.length(state.levels) - 1 ?
          Transition(ctx, `Finished(true)) :
          Same(ctx, {...state, level: state.level + 1, enemies: state.levels[state.level + 1]})
      };
  }
};

let newAtLevel = (env, level) => {
  let state = newGame(env);
  if (level >= Array.length(state.levels)) {
    state
  } else {
    {...state, status: Running, level, enemies: state.levels[level]}
  }
};

let keyPressed = (ctx, state, env) =>
  switch (Env.keyCode(env)) {
  | Events.Escape => ScreenManager.Screen.Transition(ctx, `Quit)
  | k =>
    Same(
      ctx,
      switch k {
      | Events.R => newGame(env)
      | Events.Space =>
        switch state.status {
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
      }
    )
  };

let screen = {
  ...ScreenManager.empty,
  run: (ctx, state, env) => mainLoop(ctx, state, env),
  keyPressed: (ctx, state, env) => keyPressed(ctx, state, env)
};