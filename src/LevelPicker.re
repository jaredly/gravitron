open SharedTypes;

let initialState = ();

let button = (ctx, name, diff, enabled) => UIManager.Button(
  name,
  diff,
  {...WelcomeScreen2.buttonStyle(~enabled, ctx.textFont), margin: 18}
);

let stageButtons = (ctx) => {
  let maxOpen = 1 + UserData.highestBeatenStage(ctx.userData);
  Array.mapi((i, _) => {
    button(ctx, "Stage " ++ string_of_int(i + 1),
      `StartFromStage(i),
      i <= maxOpen
    )
  }, ctx.stages) |> Array.to_list;
};

let root = (ctx, env) => {
  let highest = UserData.highestBeatenStage(ctx.userData);
  UIManager.{
  el: VBox(
    [
      Text("Pick a stage", {font: ctx.titleFont, tint: None}, Center),
      Spacer(25),
    ] @ stageButtons(ctx),
    10,
    Center
  ),
  align: Center,
  valign: Top,
  pos: (Reprocessing.Env.width(env) / 2, 20)
};
};

let back = (ctx, env) => UIManager.{
  el: Button("Back", (), WelcomeScreen2.buttonStyle(ctx.textFont)),
  align: Center,
  valign: Bottom,
  pos: (Reprocessing.Env.width(env) / 2, Reprocessing.Env.height(env) - 10)
};

let screen =
  ScreenManager.stateless(
    ~run=
      (ctx, env) => {
        open Reprocessing;
        Draw.background(Constants.black, env);
        UIManager.draw(env, root(ctx, env));
        UIManager.draw(env, back(ctx, env));
        Stateless(ctx)
      },

    ~mouseDown=
      (ctx, env) => {
        switch (UIManager.act(env, root(ctx, env))) {
        | Some(level) => Transition(ctx, level)
        | None =>
          switch (UIManager.act(env, back(ctx, env))) {
          | Some(()) => Transition(ctx, `Quit)
          | None => Same(ctx, ())
          }
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
    ~backPressed= (ctx, _) => Some(Transition(ctx, `Quit)),
    ()
  );
