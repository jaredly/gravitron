open GravShared;
open FramScreens.T;
open SharedTypes;

let setup = (env) => {
  let (w, h) =
    GravShared.isPhone ?
      (Reprocessing.Env.windowWidth(env), Reprocessing.Env.windowHeight(env)) : (800, 800);
  Reprocessing.Env.size(~width=w, ~height=h, env);
  print_endline("setting up");
  ({
    userLevels: [||],
    highScores: [||],
    font: Reprocessing.Draw.loadFont(~filename="./assets/SFCompactRounded-Black-48.fnt", ~isPixel=false, env),
  }, Screen((), WelcomeScreen.screen))
};

type transition = [
  | `Quit
  | `Start
  | `Finished(bool)
  | `UserLevels
  | `EditLevel(int)
];

let module DoneScreen = {
  let initialState = won => (won, 100.);
  let screen = FramScreens.empty;
};

let module LevelEditor = {
  let blankState = None;
  let editState = level => Some(level);
  let screen = FramScreens.empty;
};

let transitionTo = (_, transition, env) => switch transition {
| `Quit => Screen(WelcomeScreen.initialState(env), WelcomeScreen.screen)
| `Start => {print_endline("Start"); Screen(GravGame.initialState(env), GravGame.screen)}
| `Finished(won) => Screen(DoneScreen.initialState(won), DoneScreen.screen)
| `UserLevels => Screen(LevelEditor.blankState, LevelEditor.screen)
| `EditLevel(level) => Screen(LevelEditor.editState(level), LevelEditor.screen)
};

FramScreens.run(~transitionTo, ~setup);

/**
 * I feel like I need to establish some normal way
 * of switching between screens.
 * Like a "go to this screen now".
 * I dunno.
 * Maybe using polumorphic variantes?
 */