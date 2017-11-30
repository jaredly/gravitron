/* open GravShared; */
open FramScreens.T;

open SharedTypes;

let setup = (env) => {
  let (w, h) =
    GravShared.isPhone ?
      (Reprocessing.Env.windowWidth(env), Reprocessing.Env.windowHeight(env)) : (800, 800);
  Reprocessing.Env.size(~width=w, ~height=h, env);
  print_endline("setting up");
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
        )
    },
    Screen((), WelcomeScreen.screen)
  )
};

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

let transitionTo = (_, transition, env) =>
  switch transition {
  | `Quit => Screen(WelcomeScreen.initialState(env), WelcomeScreen.screen)
  | `Start =>
    print_endline("Start");
    Screen(GravGame.initialState(env), GravGame.screen)
  | `Finished(won) => Screen(DoneScreen.initialState(won), DoneScreen.screen)
  | `UserLevels => Screen(LevelEditor.blankState, LevelEditor.screen)
  | `EditLevel(level) => Screen(LevelEditor.editState(level), LevelEditor.screen)
  };

FramScreens.run(~transitionTo, ~setup);