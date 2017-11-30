
open FramScreens.T;
open SharedTypes;
open Reprocessing;

let initialState = env => ();

let run = (ctx, env) => {
    Draw.background(Constants.black, env);
    let w = Env.width(env) / 2;
    let h = Env.height(env) / 2 - 50;
    DrawUtils.centerText(~font=ctx.titleFont, ~body="Gravitron", ~pos=(w, h), env);
    DrawUtils.centerText(~font=ctx.textFont, ~body="Tap to start the game", ~pos=(w, h + 100), env);
    Same(ctx, ())
};

let screen = {
  run: (ctx, _, env) => run(ctx, env),
  mouseDown: (ctx, _, env) => Transition(ctx, `Start),
  keyPressed: (ctx, _, env) => Same(ctx, ())
};
