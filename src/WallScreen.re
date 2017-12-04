
open SharedTypes;
open Reprocessing;

let initialState = ();

let buttonWidth = 200;
let buttonHeight = 50;

let wallTypeText = t => switch t {
| FireWalls => "solid"
| BouncyWalls => "bouncy"
| Minimapped => "none"
};

let buttons = [|
  ("Solid walls", FireWalls),
  ("Bouncy walls", BouncyWalls),
  ("No walls", Minimapped),
|];

let buttonsWithPosition = (env, buttons) => {
  let w = Env.width(env) / 2;
  let h = Env.height(env) / 2 - 150;
  let x = w - buttonWidth / 2;
  let y0 = h + 90;
  let margin = 20;

  Array.mapi((i, button) => {
    let y = y0 + i * (buttonHeight + margin);
    ((x, y), button)
  }, buttons)
};

/** TODO I want to make an animation or something on the welcome screen
 * that shows a bit of what it will be like
 * so a player going around & getting pursued by bullets. The bullets would spawn offscreen
 * and come in, and then
 */
let run = (ctx, env) => {
  Draw.background(Constants.black, env);
  let w = Env.width(env) / 2;
  let h = Env.height(env) / 2 - 150;
  /* DrawUtils.centerText(~font=ctx.titleFont, ~body="Gravitron", ~pos=(w, h), env); */
  /* DrawUtils.centerText(~font=ctx.textFont, ~body="Tap to start the game", ~pos=(w, h + 50), env); */

  let t = currentWallType(ctx);
  buttonsWithPosition(env, buttons) |> Array.iter((((x, y), (text, wallType))) => {
    Draw.fill(MyUtils.withAlpha(Constants.white, 0.2), env);
    Draw.noStroke(env);
    if (MyUtils.rectCollide(Env.mouse(env), ((x,y), (buttonWidth, buttonHeight)))) {
      Draw.strokeWeight(2, env);
      Draw.stroke(Utils.color(~r=100, ~g=100, ~b=100, ~a=255), env);
    };
    if (wallType === t) {
      /* Draw.strokeWeight(2, env);
      Draw.stroke(Utils.color(~r=200, ~g=200, ~b=200, ~a=255), env); */
    Draw.fill(MyUtils.withAlpha(Constants.white, 0.4), env);
    };
    /* Draw.noFill(env); */
    Draw.rect(~pos=(x, y), ~width=buttonWidth, ~height=buttonHeight, env);
    DrawUtils.centerText(~font=ctx.textFont, ~body=text, ~pos=(x + buttonWidth / 2, y + 10), env);
  });

  ()
};

let screen = ScreenManager.Screen.{
  run: (ctx, _, env) => Same(ctx, run(ctx, env)),
  mouseDown: (ctx, _, env) => {
    let wallTyp = buttonsWithPosition(env, buttons) |> Array.fold_left(
      (current, (pos, (_, dest))) => {
        if (current == None) {
          if (MyUtils.rectCollide(Env.mouse(env), (pos, (buttonWidth, buttonHeight)))) {
            Some(dest)
          } else {
            None
          }
        } else {current}
      },
      None
    );
    switch wallTyp {
    | None => Same(ctx, ())
    | Some(wallTyp) => {
      let ctx = SharedTypes.updateCurrentWallType(env, ctx, wallTyp);
      Transition(ctx, `Quit)
    }
    }
  },
  keyPressed: (ctx, _, env) => Same(ctx, ())
};
