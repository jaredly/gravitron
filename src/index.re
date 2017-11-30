/* open GravShared; */
/* open FramScreens.T; */

open SharedTypes;

type transition = [ | `Quit | `Start | `Finished(bool) | `UserLevels | `EditLevel(int)];

module DoneScreen = {
  let max = 50.;
  let initialState = (won) => (won, 0.);
  let screen = {
    ...FramScreens.empty,
    mouseDown: (ctx, (_, animate) as state, env) => {
      if (animate == max) {
        Transition(ctx, `Quit)
      } else {
        Same(ctx, state)
      }
    },
    run: (ctx, (won, animate), env) => {
      open Reprocessing;

      Draw.background(Constants.black, env);
      let w = Env.width(env) / 2;
      let h = Env.height(env) / 2 - 50;
      let y0 = (-50.);
      let percent = animate /. max;
      let y = (float_of_int(h) -. y0) *. percent +. y0 |> int_of_float;
      /* TODO ease in or sth */
      DrawUtils.centerText(~font=ctx.titleFont, ~body=(won ? "You won!" : "You lost..."), ~pos=(w, y), env);
      let delta = Env.deltaTime(env) *. 1000. /. 16.;
      if (animate +. delta < max) {
        Same(ctx, (won, animate +. delta))
      } else {
        Same(ctx, (won, max))
      }
    }
  };
};

module LevelEditor = {
  let blankState = None;
  let editState = (level) => Some(level);
  let screen = FramScreens.empty;
};

let setup = (initialScreen, env) => {
  let (w, h) =
    GravShared.isPhone ?
      (Reprocessing.Env.windowWidth(env), Reprocessing.Env.windowHeight(env)) : (800, 800);
  Reprocessing.Env.size(~width=w, ~height=h, env);
  (
    {
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

let module MaybeFaster = () => {
  let transitionTo = (_, transition, env) =>
    FramScreens.Screen.(switch transition {
    | `Quit => Screen(WelcomeScreen.initialState(env), WelcomeScreen.screen)
    | `Start =>
      print_endline("Start");
      Screen(GravGame.initialState(env), GravGame.screen)
    | `Finished(won) => Screen(DoneScreen.initialState(won), DoneScreen.screen)
    | `UserLevels => Screen(LevelEditor.blankState, LevelEditor.screen)
    | `EditLevel(level) => Screen(LevelEditor.editState(level), LevelEditor.screen)
    });

  let initialScreen = FramScreens.Screen.Screen((), WelcomeScreen.screen);

  FramScreens.run(~transitionTo, ~setup=setup(initialScreen),
    ~perfMonitorFont="./assets/SFCompactDisplay-Regular-16.fnt");
};


let module CanHotReload = () => {
  let transitionTo = (_, transition, env) =>
    switch transition {
    | `Quit => `WelcomeScreen(WelcomeScreen.initialState(env))
    | `Start =>
      print_endline("Start");
      `Game(GravGame.initialState(env))
    | `Finished(won) => `DoneScreen(DoneScreen.initialState(won))
    | `UserLevels => `LevelEditor(LevelEditor.blankState)
    | `EditLevel(level) => `LevelEditor(LevelEditor.editState(level))
    };

  let getScreen = state => FramScreens.HotReloadable.(switch state {
  | `WelcomeScreen(state) => Screen(state, WelcomeScreen.screen, state => `WelcomeScreen(state))
  | `Game(state) => Screen(state, GravGame.screen, state => `Game(state))
  | `DoneScreen(state) => Screen(state, DoneScreen.screen, state => `DoneScreen(state))
  | `LevelEditor(state) => Screen(state, LevelEditor.screen, state => `LevelEditor(state))
  });

  let initialScreen = `WelcomeScreen(());
  FramScreens.HotReloadable.run(
    ~transitionTo, ~setup=setup(initialScreen), ~getScreen,
  ~perfMonitorFont="./assets/SFCompactDisplay-Regular-16.fnt");
};

let module X = MaybeFaster();