open SharedTypes;
open Reprocessing;

let initialState = (0., 0., None);

let width = 140;
let textHeight = 24;

let drawScores = (ctx, env, name, scores, y) => {
  let x = Env.width(env) / 2;
  DrawUtils.centerText(~font=ctx.textFont, ~body=name, ~pos=(x, y), env);
  let y = y + 40;
  (if (scores == []) {
    DrawUtils.centerText(~font=ctx.smallFont, ~body="No scores", ~pos=(x, y), env);
    y
  } else {
    let x = x - width / 2;
    List.iteri(
      (i, score) => {
        let y = y + i * textHeight;
        Draw.text(~font=ctx.smallFont, ~body="Stage " ++ string_of_int(i + 1), ~pos=(x, y), env);
        DrawUtils.textRightJustified(
          ~font=ctx.smallFont,
          ~body=GravDraw.timeText(score), ~pos=(x + width, y), env
        );
      },
      scores
    );
    y + textHeight * List.length(scores)
  }) + 20
};

let backButton = (ctx, env) => {
  Button.singleBottom(env, "Back", ctx.textFont, (Env.width(env) / 2, Env.height(env) - 10))
};

let run = (ctx, (dy, vy, down), env) => {
  Draw.background(Constants.black, env);
  let w = Env.width(env) / 2;
  let h = 20;

  let yoff = switch down {
  | None => dy
  | Some(y0) => {
    let y = Env.mouse(env) |> snd |> float_of_int;
    dy +. (y -. y0)
  }
  };

  let y = h + 50 + int_of_float(yoff);
  let (f, b, m) = ctx.userData.UserData.highScores;
  let y = drawScores(ctx, env, "Bouncy walls", b, y);
  let y = drawScores(ctx, env, "Solid walls", f, y);
  let y = drawScores(ctx, env, "No walls", m, y);

  Draw.noStroke(env);
  if (yoff < -15.) {
    Draw.fill(MyUtils.withAlpha(Constants.white, 0.05), env);
    Draw.rect(~pos=(0, 0), ~width=Env.width(env), ~height=h + 34, env);
    Draw.fill(MyUtils.withAlpha(Constants.white, 0.05), env);
    Draw.rect(~pos=(0, 0), ~width=Env.width(env), ~height=h + 32, env);
  };

  Draw.fill(Constants.black, env);
  Draw.rect(
    ~pos=(0, 0),
    ~width=Env.width(env),
    ~height=h + 30,
    env
  );
  DrawUtils.centerText(~font=ctx.boldTextFont, ~body="High scores", ~pos=(w, h), env);
  Button.drawSingle(env, backButton(ctx, env));

  /* let vy = abs_float(vy) < 0.01 ? 0. : vy *. 0.90; */
  (dy, vy, down)
};

let screen = {
  ...ScreenManager.empty,
  run: (ctx, state, env) => {
    Same(ctx, run(ctx, state, env))
  },
  mouseDown: (ctx, (dy, vy, down), env) => {
    if (Button.hitSingle(env, backButton(ctx, env))) {
      Transition(ctx, `Quit)
    } else {
      Same(ctx, (dy, 0., Some(Env.mouse(env) |> snd |> float_of_int)))
    }
  },
  mouseUp: (ctx, (dy, vy, down), env) => {
    let (yoff, vy) = switch down {
    | None => (dy, 0.)
    | Some(y0) => {
      let y = Env.mouse(env) |> snd |> float_of_int;
      let py = Env.pmouse(env) |> snd |> float_of_int;
      let vy = (y -. py);
       /* /. Env.deltaTime(env) /. 1000.; */
      (dy +. (y -. y0), vy)
    }
    };

    Same(ctx, (yoff, vy, None))
  }
  /* mouseMove: (ctx, (dy, vy, down), env) => {
    let y = snd(Env.mouse(env));
    let dy =
  }, */
};