open SharedTypes;

module LevelEditor = {
  let blankState = None;
  let editState = (level) => Some(level);
  let screen = ScreenManager.empty;
};

let setup = (initialScreen, env) => {
  Reprocessing.Env.resizeable(false, env);
  let (w, h) =
    GravShared.isPhone ?
      (Reprocessing.Env.windowWidth(env), Reprocessing.Env.windowHeight(env)) : (800, 800);
  Reprocessing.Env.size(~width=w, ~height=h, env);
  (
    {
      highestBeatenLevel: switch (Reprocessing.Env.loadUserData(~key="highest_beaten_level", env)) {
      | None => -1
      | Some(x) => x
      },
      userLevels: [||],
      highScores: [||],
      titleFont:
        Reprocessing.Draw.loadFont(
          ~filename="./assets/SFCompactRounded-Black-48.fnt",
          ~isPixel=false,
          env
        ),
      textFont:
        Reprocessing.Draw.loadFont(
          ~filename="./assets/SFCompactDisplay-Regular-24.fnt",
          ~isPixel=false,
          env
        ),
      smallFont:
        Reprocessing.Draw.loadFont(
          ~filename="./assets/SFCompactDisplay-Regular-16.fnt",
          ~isPixel=false,
          env
        )
    },
    initialScreen
  )
};

let transitionTo = (_, transition, env) =>
  switch transition {
  | `Quit => `WelcomeScreen(WelcomeScreen.initialState(env))
  | `Start =>
    print_endline("Start");
    `Game(GravGame.initialState(env))
  | `StartFromLevel(level) => `Game(GravGame.newAtLevel(env, level))
  | `Finished(won) => `DoneScreen(DoneScreen.initialState(won))
  | `PickLevel => `LevelPicker(LevelPicker.initialState)
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
    }
  );

let initialScreen = `WelcomeScreen(());

ScreenManager.run(
  ~title="Gravitron",
  ~transitionTo,
  ~setup=setup(initialScreen),
  ~getScreen,
  ()
  /* ~perfMonitorFont="./assets/SFCompactDisplay-Regular-16.fnt" */
);