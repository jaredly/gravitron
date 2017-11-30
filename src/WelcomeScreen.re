
open FramScreens.T;
open SharedTypes;
open Reprocessing;

let initialState = env => ();

let screen = {
  run: (ctx, _, env) => {
    Draw.background(Constants.black, env);
    let w = Env.width(env) / 2;
    let h = Env.height(env) / 2 - 50;
    DrawUtils.centerText(~font=ctx.font, ~body="Gravitron", ~pos=(w, h), env);
    Same(ctx, ())
  },
  mouseDown: (ctx, _, env) => Transition(ctx, `Start),
  keyPressed: (ctx, _, env) => Same(ctx, ())
};
