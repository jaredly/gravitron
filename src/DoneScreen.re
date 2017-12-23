open SharedTypes;

let max = 30.;
let initialState = (won, reached, total, difficulty) => (won, reached, total, 0., difficulty);
let screen = {
  ...ScreenManager.empty,
  backPressed: (ctx, _, _) => Some(Transition(ctx, `Quit)),
  mouseDown: (ctx, (_, _, _, animate, _) as state, env) => {
    if (animate == max) {
      Transition(ctx, `Quit)
    } else {
      Same(ctx, state)
    }
  },
  run: (ctx, (won, (stage, reached), total, animate, difficulty), env) => {
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
        let text = switch difficulty {
        | None => Printf.sprintf("Reached level %d/%d of stage %d", reached + 1, total, stage + 1)
        | Some(_) => "Reached level " ++ string_of_int(reached + 1)
        };
        DrawUtils.centerText(~font=ctx.smallFont, ~body=text, ~pos=(w, y + 60), env);
      };
      DrawUtils.centerText(~font=ctx.textFont, ~body=(GravShared.isPhone ? "Tap to continue" : "Click to continue"), ~pos=(w, y + 80), env);
    };

    Draw.noTint(env);

    let delta = Env.deltaTime(env) *. 1000. /. 16.;
    if (animate +. delta < max) {
      Same(ctx, (won, (stage, reached), total, animate +. delta, difficulty))
    } else {
      Same(ctx, (won, (stage, reached), total, max, difficulty))
    }
  }
};
