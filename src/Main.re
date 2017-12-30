open SharedTypes;

module LevelEditor = {
  let blankState = None;
  let editState = (level) => Some(level);
  let screen = ScreenManager.empty;
};

let getEnv = name => try { Some(Sys.getenv(name)) } { | Not_found => None };

let (/+) = Filename.concat;
let setup = (assetDir, initialScreen, env) => {
  if (!GravShared.isPhone) {
    Reprocessing.Env.resizeable(false, env);
  };

  let userData = SharedTypes.UserData.load(env);

  if (!GravShared.isPhone) {
    let size = min(
      min(
        Reprocessing.Env.maxWidth(env),
        Reprocessing.Env.maxHeight(env)
      ),
      800
    );
    Reprocessing.Env.size(~width=size, ~height=size, env);
  } else if (GravShared.fakePhone) {
    switch (getEnv("TABLET")) {
    | Some("7") => Reprocessing.Env.size(~width=600, ~height=1024, env)
    | Some("10") => Reprocessing.Env.size(~width=800, ~height=1280, env)
    | Some("ios") => Reprocessing.Env.size(~width=1242/4 + 1, ~height=2208/4, env)
    | Some("iostab") => Reprocessing.Env.size(~width=2048/4 + 1, ~height=2732/4 + 1, env)
    | Some(_)
    | None => Reprocessing.Env.size(~width=340, ~height=640, env)
    }
  };

  (
    {
      userData,
      stages: Levels.stages(env),
      highScores: [||],
      titleFont:
        Reprocessing.Draw.loadFont(
          ~filename=assetDir /+ "Orbitron-Black-48.fnt",
          ~isPixel=false,
          env
        ),
      smallTitleFont:
        Reprocessing.Draw.loadFont(
          ~filename=assetDir /+ "Orbitron-Regular-24.fnt",
          ~isPixel=false,
          env
        ),
      boldTextFont:
        Reprocessing.Draw.loadFont(
          ~filename=assetDir /+ "Orbitron-Black-24.fnt",
          ~isPixel=false,
          env
        ),
      /* titleFont:
        Reprocessing.Draw.loadFont(
          ~filename=assetDir /+ "SFCompactRounded-Black-48.fnt",
          ~isPixel=false,
          env
        ), */
      textFont:
        Reprocessing.Draw.loadFont(
          /* ~filename=assetDir /+ "SFCompactDisplay-Regular-24.fnt", */
          ~filename=assetDir /+ "Orbitron-Regular-24.fnt",
          ~isPixel=false,
          env
        ),
      smallFont:
        Reprocessing.Draw.loadFont(
          ~filename=assetDir /+ "Orbitron-Regular-16.fnt",
          ~isPixel=false,
          env
        ),
    },
    initialScreen
  )
};

let reloadCtx = (env, ctx) => {
  {...ctx, stages: Levels.stages(env)}
};

let transitionTo = (ctx, transition, env) => {
  /** TODO remove in prod */
  let ctx = reloadCtx(env, ctx);
  switch transition {
  | `Quit => `WelcomeScreen(WelcomeScreen2.initialState(env))
  | `Start =>
    print_endline("Start");
    `Game(GravGame.initialState(~wallType=currentWallType(ctx), env, ctx))
  | `StartFromStage(stage) => `Game(GravGame.newAtStage(~wallType=currentWallType(ctx), env, ctx, stage))
  | `Finished(won, reached, total, difficulty) => `DoneScreen(DoneScreen.initialState(won, reached, total, difficulty))
  | `FreeStyle(difficulty) => `Game(GravGame.initialState(~mode=GravShared.FreePlay(difficulty, []), ~wallType=currentWallType(ctx), env, ctx))
  | `PickFreePlay => `PickFreePlay(FreePlayPicker.initialState)
  | `PickLevel => `LevelPicker(LevelPicker.initialState)
  | `HighScores => `HighScores(HighScores.initialState)
  | `PickWalls => `WallScreen(WallScreen.initialState)
  | `UserLevels => `LevelEditor(LevelEditor.blankState)
  | `EditLevel(level) => `LevelEditor(LevelEditor.editState(level))
  };
};

let getScreen = (state) =>
  ScreenManager.Screen.(
    switch state {
    | `WelcomeScreen(state) =>
      Screen(state, WelcomeScreen2.screen, ((state) => `WelcomeScreen(state)))
    | `LevelPicker(state) => Screen(state, LevelPicker.screen, ((state) => `LevelPicker(state)))
    | `HighScores(state) => Screen(state, HighScores.screen, ((state) => `HighScores(state)))
    | `Game(state) => Screen(state, GravGame.screen, ((state) => `Game(state)))
    | `PickFreePlay(state) => Screen(state, FreePlayPicker.screen, state => `PickFreePlay(state))
    | `DoneScreen(state) => Screen(state, DoneScreen.screen, ((state) => `DoneScreen(state)))
    | `LevelEditor(state) => Screen(state, LevelEditor.screen, ((state) => `LevelEditor(state)))
    | `WallScreen(state) => Screen(state, WallScreen.screen, (state) => `WallScreen(state))
    }
  );

let initialScreen = `WelcomeScreen(());

let run = (assetDir, showPerf) =>
ScreenManager.run(
  ~title="Gravitron",
  ~transitionTo,
  ~setup=setup(assetDir, initialScreen),
  ~getScreen,
  /* ~perfMonitorFont=?(showPerf ? Some(assetDir /+ "SFCompactDisplay-Regular-16.fnt") : None), */
  ()
);