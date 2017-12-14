open SharedTypes;

let max = 30.;
let initialState = (won, reached, total) => (won, reached, total, 0.);
let screen = {
  ...ScreenManager.empty,
  backPressed: (ctx, _, _) => Some(Transition(ctx, `Quit)),
  mouseDown: (ctx, (_, _, _, animate) as state, env) => {
    if (animate == max) {
      Transition(ctx, `Quit)
    } else {
      Same(ctx, state)
    }
  },
  run: (ctx, (won, reached, total, animate), env) => {
    open Reprocessing;

    Draw.background(Constants.black, env);
    let w = Env.width(env) / 2;
    let h = Env.height(env) / 2 - 70;
    let y0 = float_of_int(h) -. 50.;
    let percent = animate /. max;

    Draw.tint(Utils.color(~r=255, ~g=255, ~b=255, ~a=int_of_float((percent) *. 255.)), env);

    let y = (float_of_int(h) -. y0) *. percent +. y0 |> int_of_float;
    /* TODO ease in or sth */
    DrawUtils.centerText(~font=ctx.titleFont, ~body=(won ? "You won!" : "Game over"), ~pos=(w, y), env);
    if (animate === max) {
      if (!won) {
        DrawUtils.centerText(~font=ctx.smallFont, ~body=Printf.sprintf("Reached level %d/%d", reached + 1, total), ~pos=(w, y + 60), env);
      };
      DrawUtils.centerText(~font=ctx.textFont, ~body=(GravShared.isPhone ? "Tap to continue" : "Click to continue"), ~pos=(w, y + 80), env);
    };

    Draw.noTint(env);

    let delta = Env.deltaTime(env) *. 1000. /. 16.;
    if (animate +. delta < max) {
      Same(ctx, (won, reached, total, animate +. delta))
    } else {
      Same(ctx, (won, reached, total, max))
    }
  }
};
