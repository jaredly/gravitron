open SharedTypes;

module LevelEditor = {
  let blankState = None;
  let editState = (level) => Some(level);
  let screen = ScreenManager.empty;
};

module LevelPicker = {
  let initialState = ();
  let buttonsInPosition = (env) => {
    let buttons = ref([]);
    let w = Reprocessing.Env.width(env);
    let boxSize = 60;
    let margin = 10;
    let rowSize = (w - margin) / (boxSize + margin);
    for (i in 0 to Array.length(GravLevels.levels) - 1) {
      let col = i mod rowSize;
      let row = i / rowSize;
      let x = col * (boxSize + margin) + margin;
      let y = row * (boxSize + margin) + margin;
      buttons := [(
        string_of_int(i + 1),
        (x + boxSize / 2, y + boxSize / 2),
        (x, y),
        boxSize,
        boxSize,
        i
      ), ...buttons^]
    };
    buttons^;
  };

  let screen =
    ScreenManager.stateless(
      ~run=
        (ctx, env) => {
          open Reprocessing;
          Draw.background(Constants.black, env);
          List.iter(((text, textpos, pos, width, height, i)) => {
            Draw.noFill(env);
            Draw.stroke(Constants.white, env);
            Draw.strokeWeight(3, env);
            Draw.rect(~pos, ~width, ~height, env);
            Draw.text(
              ~font=ctx.textFont,
              ~body=text,
              ~pos=textpos,
              env
            )
          }, buttonsInPosition(env));
          Stateless(ctx)
        },
      ~mouseDown=(ctx, env) => {
        let res = List.fold_left(
          (current, (_, _, pos, width, height, i)) => switch current {
            | Some(x) => current
            | None =>
              if (MyUtils.rectCollide(Reprocessing.Env.mouse(env), (pos, (width, height)))) {
                Some(i)
              } else {
                None
              }
          },
          None,
          buttonsInPosition(env)
        );
        switch res {
        | None => Stateless(ctx)
        | Some(dest) => Transition(ctx, `StartFromLevel(dest))
        }
      },
      ~keyPressed=
        (ctx, env) =>
          Reprocessing.(
            switch (Env.keyCode(env)) {
            | Events.Escape => Transition(ctx, `Quit)
            | _ => Stateless(ctx)
            }
          ),
      ()
    );
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
  ~transitionTo,
  ~setup=setup(initialScreen),
  ~getScreen,
  ~perfMonitorFont="./assets/SFCompactDisplay-Regular-16.fnt"
);