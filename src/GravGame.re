open Reprocessing;

open MyUtils;

open SharedTypes;

open GravShared;

let newGame = (~wallType=FireWalls, env, ctx) => {
  /* let stages = GravLevels.getStages(env); */
  {
    status: Running,
    hasMoved: false,
    startTime: Env.getTimeMs(env),
    levelTicker: 0.,
    level: (0, 0),
    /* stages, */
    me: {
      health: Player.fullHealth,
      lives: Player.fullLives,
      pos: getPhonePos(env),
      color: Constants.green,
      vel: v0,
      acc: v0,
      size: 15. *. GravLevels.sizeFactor,
    },
    enemies: ctx.stages[0][0],
    bullets: [],
    explosions: [],
    wallType,
  }
};

let initialState = newGame;

let drawState = (ctx, state, env) => {
  Draw.background(Constants.black, env);
  open GravDraw;
  switch (state.status) {
  | Running | Paused(_) => drawMe(state.me, env)
  | _ => ()
  };
  List.iter(drawEnemy(env), state.enemies);
  List.iter(drawBullet(env, state.me.pos), state.bullets);
  List.iter(drawExplosion(env), state.explosions);

  if (state.wallType === Minimapped) {
    drawMinimap(state.bullets, state.me, env);
  };
  let timeElapsed = switch (state.status) {
  | Paused(pauseTime) => pauseTime -. state.startTime
  | _ => Env.getTimeMs(env) -. state.startTime
  };
  drawStatus(ctx, state.wallType, state.level, state.me, timeElapsed, env);
  if (!state.hasMoved) {
    drawHelp(ctx, state.me, env);
  };

  if (state.levelTicker < 120.) {
    let anim = state.levelTicker > 60. ? (state.levelTicker -. 60.) /. 60. : 0.;
    Draw.tint(withAlpha(Constants.white, 0.5 -. anim /. 2.), env);
    let (stage, level) = state.level;
    DrawUtils.centerText(
      ~pos=(Env.width(env) / 2, Env.height(env) / 2),
      ~body="Level " ++ string_of_int(stage + 1) ++ "-" ++ string_of_int(level  + 1),
      ~font=ctx.titleFont,
      env
    );
    Draw.noTint(env);
  };
};

let mainLoop = (ctx, state, env) => {
  open ScreenManager.Screen;
  switch state.status {
  | Dead(0) =>
    if (state.me.Player.lives > 0) {
      let (stage, level) = state.level;
      Same(ctx, {
        ...state,
        status: Running,
        me: {...state.me, Player.health: fullPlayerHealth, lives: state.me.Player.lives - 1},
        enemies: ctx.stages[stage][level],
        explosions: [],
        bullets: []
      })
    } else {
      Transition(ctx, `Finished(false, state.level, Array.length(ctx.stages[fst(state.level)])))
    }
  | Paused(_) =>
    drawState(ctx, state, env);
    PauseOverlay.draw(ctx, env);

    Same(ctx, state)
  | _ =>
    let state = {
      ...state,
      levelTicker: state.levelTicker +. GravShared.deltaTime(env),
      status:
        switch state.status {
        | Dead(n) => Dead(n - 1)
        | t => t
        }
    };
    open GravStep;
    let state =
      state.status === Running ?
        true
        ? PlayerLogic.stepMeMouse(state, env)
        : PlayerLogic.stepMeKeys(state, env) : state;
    let state = EnemyLogic.stepEnemies(state, env);
    let state = {...state, explosions: stepExplosions(state.explosions, env)};
    let state = BulletLogic.stepBullets(env, state);
    drawState(ctx, state, env);
    state.enemies !== [] || state.status !== Running ?
      Same(ctx, state) :
      {
        let (stage, level) = state.level;
        let endOfStage = level == Array.length(ctx.stages[stage]) - 1;
        let ctx = endOfStage ? SharedTypes.updateHighestBeatenStage(env, ctx, state.level |> fst) : ctx;
        let didWin = endOfStage && stage == Array.length(ctx.stages) - 1;
        let next = endOfStage ? (stage + 1, 0) : (stage, level + 1);
        didWin ?
          Transition(ctx, `Finished(true, state.level, Array.length(ctx.stages[stage]))) :
          Same(ctx, {...state,
            level: next,
            enemies: ctx.stages[fst(next)][snd(next)],
            bullets: endOfStage ? [] : state.bullets,
            levelTicker: 0.,
            me: endOfStage ? Player.rejuvinate(state.me) : state.me,
            startTime: endOfStage ? Env.getTimeMs(env) : state.startTime
          })
      };
  }
};

let newAtStage = (~wallType, env, ctx, stage) => {
  let state = newGame(~wallType, env, ctx);
  if (stage >= Array.length(ctx.stages)) {
    state
  } else {
    {...state, status: Running, level: (stage, 0), enemies: ctx.stages[stage][0]}
  }
};

let keyPressed = (ctx, state, env) =>
  switch (Env.keyCode(env)) {
  | Events.Escape => ScreenManager.Screen.Transition(ctx, `Quit)
  | k =>
    Same(
      ctx,
      switch k {
      | Events.R => newGame(env, ctx)
      | Events.Space =>
        switch state.status {
        | Paused(pauseTime) => {...state,
          startTime: state.startTime +. (Reprocessing.Env.getTimeMs(env) -. pauseTime),
          status: Running
        }
        | Running => {...state, status: Paused(Env.getTimeMs(env))}
        | _ => state
        }
      /* | Events.Num_1 => newAtLevel(~wallType=state.wallType, env, 0)
      | Events.Num_2 => newAtLevel(~wallType=state.wallType, env, 1)
      | Events.Num_3 => newAtLevel(~wallType=state.wallType, env, 2)
      | Events.Num_4 => newAtLevel(~wallType=state.wallType, env, 3)
      | Events.Num_5 => newAtLevel(~wallType=state.wallType, env, 4)
      | Events.Num_6 => newAtLevel(~wallType=state.wallType, env, 5)
      | Events.Num_7 => newAtLevel(~wallType=state.wallType, env, 6)
      | Events.Num_8 => newAtLevel(~wallType=state.wallType, env, 7)
      | Events.Num_9 => newAtLevel(~wallType=state.wallType, env, 8) */
      | _ => state
      }
    )
  };

let mouseDown = (ctx, state, env) => {
  open ScreenManager.Screen;
  let state = {...state, hasMoved: true};
  switch (state.status) {
  | Paused(pauseTime) => {
    switch (PauseOverlay.mouseDown(ctx, env)) {
      | None => Same(ctx, state)
      | Some(`Resume) => Same(ctx, {
        ...state,
        startTime: state.startTime +. (Reprocessing.Env.getTimeMs(env) -. pauseTime),
        status: Running
      })
      | Some(`Quit) => Transition(ctx, `Quit)
    }
    /* Same(ctx, {...state, status: Running}) */
  }
  | Running => {
    if (Utils.rectCollide(Env.mouse(env), ((0, 0), (50, 50)))) {
      Same(ctx, {...state, status: Paused(Env.getTimeMs(env))})
    } else {
      Same(ctx, state)
    };
  }
  | _ => Same(ctx, state)
  }
};

let screen = ScreenManager.Screen.{
  /* ...ScreenManager.empty, */
  run: (ctx, state, env) => mainLoop(ctx, state, env),
  mouseDown,
  keyPressed: (ctx, state, env) => keyPressed(ctx, state, env),
  backPressed: (ctx, _, _) => {
    /* Capi.logAndroid("Grav game plz quit"); */
    Some(Transition(ctx, `Quit))
  }
};