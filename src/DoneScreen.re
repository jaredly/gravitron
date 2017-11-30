open SharedTypes;

let max = 50.;
let initialState = (won) => (won, 0.);
let screen = {
  ...ScreenManager.empty,
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
