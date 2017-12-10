open SharedTypes;

module LevelEditor = {
  let blankState = None;
  let editState = (level) => Some(level);
  let screen = ScreenManager.empty;
};

let (/+) = Filename.concat;
let setup = (assetDir, initialScreen, env) => {
  if (!GravShared.isPhone) {
    Reprocessing.Env.resizeable(false, env);
  };

  let userData = SharedTypes.UserData.load(env);

  if (!GravShared.isPhone) {
    Reprocessing.Env.size(~width=800, ~height=800, env);
  };

  (
    {
      userData,
      userLevels: [||],
      highScores: [||],
      titleFont:
        Reprocessing.Draw.loadFont(
          ~filename=assetDir /+ "SFCompactRounded-Black-48.fnt",
          ~isPixel=false,
          env
        ),
      textFont:
        Reprocessing.Draw.loadFont(
          ~filename=assetDir /+ "SFCompactDisplay-Regular-24.fnt",
          ~isPixel=false,
          env
        ),
      smallFont:
        Reprocessing.Draw.loadFont(
          ~filename=assetDir /+ "SFCompactDisplay-Regular-16.fnt",
          ~isPixel=false,
          env
        )
    },
    initialScreen
  )
};

let transitionTo = (ctx, transition, env) =>
  switch transition {
  | `Quit => `WelcomeScreen(WelcomeScreen.initialState(env))
  | `Start =>
    print_endline("Start");
    `Game(GravGame.initialState(~wallType=currentWallType(ctx), env))
  | `StartFromLevel(level) => `Game(GravGame.newAtLevel(env, level))
  | `Finished(won) => `DoneScreen(DoneScreen.initialState(won))
  | `PickLevel => `LevelPicker(LevelPicker.initialState)
  | `PickWalls => `WallScreen(WallScreen.initialState)
  | `UserLevels => `LevelEditor(LevelEditor.blankState)
  | `EditLevel(level) => `LevelEditor(LevelEditor.editState(level))
  };

let getScreen = (state) =>
  ScreenManager.Screen.(
    switch state {
    | `WelcomeScreen(state) =>
      Screen(state, WelcomeScreen.screen, ((state) => `WelcomeScreen(state)))
    | `LevelPicker(state) => Screen(state, LevelPicker.screen, ((state) => `LevelPicker(state)))
    | `Game(state) => Screen(state, GravGame.screen, ((state) => `Game(state)))
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
  ~perfMonitorFont=?(showPerf ? Some(assetDir /+ "SFCompactDisplay-Regular-16.fnt") : None),
  ()
);