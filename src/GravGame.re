open Reprocessing;

open MyUtils;

open SharedTypes;

open GravShared;

let newGame = (~mode=Campaign, ~wallType=FireWalls, env, ctx) => {
  /* let stages = GravLevels.getStages(env); */
  let mode = switch mode {
    | Campaign => Campaign
    | FreePlay(Easy, _) => FreePlay(Easy, FreePlay.makeLevel(env, FreeBetter.easyEnemy))
    | FreePlay(Medium, _) => FreePlay(Medium, FreePlay.makeLevel(env, FreeBetter.mediumEnemy))
    | FreePlay(Hard, _) => FreePlay(Hard, FreePlay.makeLevel(env, FreeBetter.hardEnemy))
    | FreePlay(Ludicrous, _) => FreePlay(Ludicrous, FreePlay.makeLevel(env, FreeBetter.ludicrousEnemy))
  };
  let lives = switch mode {
  | Campaign => Player.fullLives
  | _ => Player.freePlayLives
  };

  {
    mode,
    status: Running,
    hasMoved: false,
    startTime: Env.getTimeMs(env),
    levelTicker: 0.,
    level: (0, 0),
    gotHighScore: None,
    /* stages, */
    me: {
      health: Player.fullHealth,
      lives,
      pos: getPhonePos(env),
      color: Constants.green,
      vel: v0,
      acc: v0,
      size: 15. *. GravLevels.sizeFactor,
    },
    enemies: switch mode {
    | Campaign => ctx.stages[0][0]
    | FreePlay(_, enemies) => enemies
    },
    bullets: [],
    explosions: [],
    wallType,
  }
};

let initialState = newGame;

let drawState = (~noLevelText=false, ctx, state, env) => {
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
  drawStatus(ctx, state, timeElapsed, env);
  if (!state.hasMoved) {
    drawHelp(ctx, state.me, env);
  };

  if (!noLevelText && state.levelTicker < 120.) {
    let anim = state.levelTicker > 60. ? (state.levelTicker -. 60.) /. 60. : 0.;
    Draw.tint(withAlpha(Constants.white, 0.5 -. anim /. 2.), env);
    let (stage, level) = state.level;

    let text = switch state.mode {
    | Campaign =>
    level > 0
      ? "Level " ++ string_of_int(stage + 1) ++ "-" ++ string_of_int(level  + 1)
      : "Stage " ++ string_of_int(stage + 1);
    | FreePlay(Easy, _) => "Easy - " ++ string_of_int(level + 1)
    | FreePlay(Medium, _) => "Medium - " ++ string_of_int(level + 1)
    | FreePlay(Hard, _) => "Hard - " ++ string_of_int(level + 1)
    | FreePlay(Ludicrous, _) => "Ludicrous - " ++ string_of_int(level + 1)
    };
    DrawUtils.centerText(
      ~pos=(Env.width(env) / 2, Env.height(env) / 2 - 50),
      ~body=text,
      ~font=ctx.boldTextFont,
      env
    );

    switch state.gotHighScore {
    | None => ()
    | Some(score) =>
      DrawUtils.centerText(
        ~pos=(Env.width(env) / 2, Env.height(env) / 2),
        ~body="New high score! " ++ GravDraw.timeText(score),
        ~font=ctx.textFont,
        env
      );
    };

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
        enemies: switch state.mode {
        | Campaign => ctx.stages[stage][level]
        | FreePlay(_, enemies) => enemies
        },
        explosions: [],
        bullets: []
      })
    } else {
      Transition(ctx, `Finished(false, state.level, Array.length(ctx.stages[fst(state.level)]), switch state.mode { | FreePlay(d, _) => Some(d) | _ => None }))
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
        switch state.mode {
        | FreePlay(difficulty, _) => {
          let enemies = switch difficulty {
          | Easy => FreePlay.makeLevel(env, FreeBetter.easyEnemy)
          | Medium => FreePlay.makeLevel(env, FreeBetter.mediumEnemy)
          | Hard => FreePlay.makeLevel(env, FreeBetter.hardEnemy)
          | Ludicrous => FreePlay.makeLevel(env, FreeBetter.ludicrousEnemy)
          };

          let (_, level) = state.level;
          Same(ctx, {
            ...state,
            level: (0, level + 1),
            mode: FreePlay(difficulty, enemies),
            enemies,
            levelTicker: 0.
          })
        }
        | Campaign =>
        let (stage, level) = state.level;
        let endOfStage = level == Array.length(ctx.stages[stage]) - 1;
        let ctx = endOfStage ? SharedTypes.updateHighestBeatenStage(env, ctx, state.level |> fst) : ctx;
        let didWin = endOfStage && stage == Array.length(ctx.stages) - 1;
        let timeElapsed = Env.getTimeMs(env) -. state.startTime;
        let (gotHighScore, ctx) = endOfStage ? SharedTypes.updateHighScore(env, ctx, state.level |> fst, timeElapsed) : (false, ctx);
        let next = endOfStage ? (stage + 1, 0) : (stage, level + 1);
        didWin ?
          Transition(ctx, `Finished(true, state.level, Array.length(ctx.stages[stage]), switch state.mode { | FreePlay(d, _) => Some(d) | _ => None })) :
          Same(ctx, {...state,
            level: next,
            gotHighScore: endOfStage && gotHighScore ? Some(timeElapsed) : None,
            enemies: ctx.stages[fst(next)][snd(next)],
            bullets: endOfStage ? [] : state.bullets,
            levelTicker: 0.,
            me: endOfStage ? Player.rejuvinate(state.me) : state.me,
            startTime: endOfStage ? Env.getTimeMs(env) : state.startTime
          })
        }
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
  | Events.Escape => {
    switch (state.status) {
    | Paused(pauseTime) => {
      ScreenManager.Screen.Transition(ctx, `Quit)
    }
    | Running => {
      Same(ctx, {...state, status: Paused(Env.getTimeMs(env))})
    }
    | _ => Same(ctx, state)
    }
  }
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
  ...ScreenManager.empty,
  run: (ctx, state, env) => mainLoop(ctx, state, env),
  mouseDown,
  keyPressed: (ctx, state, env) => keyPressed(ctx, state, env),
  backPressed: (ctx, state, env) => {
    switch (state.status) {
    | Paused(pauseTime) => {
      Some(Transition(ctx, `Quit))
    }
    | Running => {
      Some(Same(ctx, {...state, status: Paused(Env.getTimeMs(env))}))
    }
    | _ => Some(Same(ctx, state))
    }
  }
};