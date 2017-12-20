open SharedTypes;
open Reprocessing;

let initialState = ();

let width = 200;
let textHeight = 24;

let drawScores = (ctx, env, name, scores, y) => {
  let x = Env.width(env) / 2;
  DrawUtils.centerText(~font=ctx.textFont, ~body=name, ~pos=(x, y), env);
  let y = y + 40;
  if (scores == []) {
    DrawUtils.centerText(~font=ctx.smallFont, ~body="No scores", ~pos=(x, y), env);
    y + 40
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
    y + textHeight * List.length(scores) + 40
  }
};

let backButton = (ctx, env) => {
  Button.singleBottom(env, "Back", ctx.textFont, (Env.width(env) / 2, Env.height(env) - 10))
};

let run = (ctx, env) => {
  Draw.background(Constants.black, env);
  let w = Env.width(env) / 2;
  let h = 50;
  DrawUtils.centerText(~font=ctx.boldTextFont, ~body="High scores", ~pos=(w, h), env);
  let y = h + 50;
  let (f, b, m) = ctx.userData.UserData.highScores;
  let y = drawScores(ctx, env, "Bouncy", b, y);
  let y = drawScores(ctx, env, "Solid", f, y);
  let y = drawScores(ctx, env, "No walls", m, y);

  Button.drawSingle(env, backButton(ctx, env));
};

let screen = {
  ...ScreenManager.empty,
  run: (ctx, _, env) => {
    Same(ctx, run(ctx, env))
  },
  mouseDown: (ctx, state, env) => {
    if (Button.hitSingle(env, backButton(ctx, env))) {
      Transition(ctx, `Quit)
    } else {
      Same(ctx, state)
    }
  }
};