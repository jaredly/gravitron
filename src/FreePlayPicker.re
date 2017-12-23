open SharedTypes;

let buttons = (Button.Normal, [
  ("Easy", Easy),
  ("Medium", Medium),
  ("Hard", Hard),
  ("Ludicrous", Ludicrous)
]);

let backButton = (ctx, env) =>
  Button.singleBottom(env, "Back", ctx.textFont, (Reprocessing.Env.width(env) / 2, Reprocessing.Env.height(env) - 10));

let initialState = ();

let screen =
  ScreenManager.stateless(
    ~run=
      (ctx, env) => {
        open Reprocessing;
        Draw.background(Constants.black, env);
        DrawUtils.centerText(
          ~font=ctx.titleFont,
          ~pos=(Env.width(env) / 2, 20),
          ~body="Difficulty",
          env
        );
        Button.draw(
          ~enabled=((i, _) => i <= 1+ UserData.highestBeatenStage(ctx.userData)),
          (Env.width(env) / 2, 100),
          buttons,
          ~ctx,
          ~env
        );
        Button.drawSingle(env, backButton(ctx, env));

        Stateless(ctx)
      },

    ~mouseDown=
      (ctx, env) => {
        open Reprocessing;
        let res = Button.hit(
          ~enabled=((i, _) => i <= 1+ UserData.highestBeatenStage(ctx.userData)),
          (Env.width(env) / 2, 100), buttons, ~ctx, ~env, Env.mouse(env));
        switch res {
        | None => if (Button.hitSingle(env, backButton(ctx, env))) {
            Transition(ctx, `Quit)
          } else { Stateless(ctx) }
        | Some(dest) => Transition(ctx, `FreeStyle(dest))
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
