
open SharedTypes;
open Reprocessing;

let initialState = env => ();

let buttonWidth = 170;
let buttonHeight = 50;

let wallTypeText = t => switch t {
| FireWalls => "solid"
| BouncyWalls => "bouncy"
| Minimapped => "none"
};

let buttons = (highestBeatenStage, hasWon): array((string, transition))  => [|
  (hasWon ? "Beaten" : "Stage " ++ string_of_int(highestBeatenStage + 2), hasWon ? `Start : `StartFromStage(highestBeatenStage + 1)),
  ("Pick stage", `PickLevel),
  /* ("Wall type: " ++ wallTypeText(wallType), `PickWalls), */
|];

let wallButtons = [|
  ("bouncy", BouncyWalls, bouncyWallColor),
  ("solid", FireWalls, fireWallColor),
  ("no walls", Minimapped, Constants.black),
|];

let buttonsWithPosition = (env, w, h, buttons, margin) => {
  let x = w - buttonWidth / 2;
  let y0 = h + 90;
  /* let margin = 20; */

  Array.mapi((i, button) => {
    let y = y0 + i * (buttonHeight + margin);
    ((x, y), button)
  }, buttons)
};

let wallButtonOffset = 180;

let verticalOffset = -200;

/** TODO I want to make an animation or something on the welcome screen
 * that shows a bit of what it will be like
 * so a player going around & getting pursued by bullets. The bullets would spawn offscreen
 * and come in, and then
 */
let run = (ctx, env) => {
  Draw.background(Constants.black, env);
  let w = Env.width(env) / 2;
  let h = Env.height(env) / 2 + verticalOffset;
  DrawUtils.centerText(~font=ctx.titleFont, ~body="Gravitron", ~pos=(w, h), env);
  /* DrawUtils.centerText(~font=ctx.textFont, ~body="Tap to start the game", ~pos=(w, h + 50), env); */

  let current = currentWallType(ctx);
  let highest = UserData.highestBeatenStage(ctx.userData);
  buttonsWithPosition(env, w, h, buttons(highest, highest == Array.length(ctx.stages) - 1), 20) |> Array.iteri((i, ((x, y), (text, _))) => {
    Draw.fill(MyUtils.withAlpha(Constants.white, 0.2), env);
    Draw.noStroke(env);
    if (MyUtils.rectCollide(Env.mouse(env), ((x,y), (buttonWidth, buttonHeight)))) {
      Draw.strokeWeight(2, env);
      Draw.stroke(Utils.color(~r=100, ~g=100, ~b=100, ~a=255), env);
    };
    /* Draw.noFill(env); */
    Draw.rect(~pos=(x, y), ~width=buttonWidth, ~height=buttonHeight, env);
    DrawUtils.centerText(~font=ctx.smallTitleFont, ~body=text, ~pos=(x + buttonWidth / 2, y + 15), env);
    if (i === 0) {
      let color = switch (current) {
      | FireWalls => fireWallColor
      | BouncyWalls => bouncyWallColor
      | Minimapped => Constants.black
      };
      Draw.stroke(color, env);
      Draw.strokeWeight(3, env);
      Draw.noFill(env);
      let margin = 6;
      Draw.rect(~pos=(x + margin, y + margin), ~width=buttonWidth - margin * 2, ~height=buttonHeight - margin * 2, env);
    };
  });

  DrawUtils.centerText(~font=ctx.smallFont, ~body="Wall type", ~pos=(w, h + 240), env);

  buttonsWithPosition(env, w, h + wallButtonOffset, wallButtons, 10) |> Array.iter((((x, y), (text, wallType, color))) => {
    /* let selected = current == wallType; */
    let textWidth = switch ctx.smallTitleFont^ {
    | None => 0
    | Some(font) => Reprocessing_Font.Font.calcStringWidth(env, font, text)
    };

    let enabled = SharedTypes.isWallTypeEnabled(ctx, wallType);
    if (enabled && (current == wallType || MyUtils.rectCollide(Env.mouse(env), ((x,y), (buttonWidth, buttonHeight))))) {
      Draw.noStroke(env);
      Draw.fill(current === wallType ? Constants.white : MyUtils.withAlpha(Constants.white, 0.5), env);
      Draw.rect(~pos=(x + buttonWidth / 2 - textWidth / 2, y + 10 + 24 + 2), ~width=textWidth, ~height=4, env);
    };

    Draw.noFill(env);
    Draw.strokeWeight(2, env);
    Draw.stroke(color, env);
    Draw.rect(~pos=(x, y), ~width=buttonWidth, ~height=buttonHeight, env);

    if (!enabled) {
      Draw.fill(Utils.color(~r=20, ~g=20, ~b=20, ~a=200), env);
      Draw.tint(Utils.color(~r=100, ~g=100, ~b=100, ~a=255), env);
      Draw.rect(~pos=(x, y), ~width=buttonWidth, ~height=buttonHeight, env);
      DrawUtils.centerText(~font=ctx.boldTextFont, ~body="LOCKED", ~pos=(x + buttonWidth / 2, y + 15), env);
      Draw.noTint(env);
    } else {
      DrawUtils.centerText(~font=ctx.smallTitleFont, ~body=text, ~pos=(x + buttonWidth / 2, y + 15), env);
    };
  });

  /* Draw.fill(Constants.red, env); */
  /* Draw.rect(~pos=Env.mouse(env), ~width=5, ~height=5, env); */

  /* let (x,y) = Env.mouse(env);
  Draw.text(~font=ctx.smallFont, ~pos=(x, y), ~body=Printf.sprintf("%d, %d", x, y), env); */

  ()
};

let screen = ScreenManager.Screen.{
  ...ScreenManager.empty,
  run: (ctx, _, env) => Same(ctx, run(ctx, env)),
  mouseDown: (ctx, _, env) => {
    let w = Env.width(env) / 2;
    let h = Env.height(env) / 2 + verticalOffset;
    let highest = UserData.highestBeatenStage(ctx.userData);
    let hasWon = highest == Array.length(ctx.stages) - 1;
    let dest = buttonsWithPosition(env, w, h, buttons(UserData.highestBeatenStage(ctx.userData), hasWon), 20) |> Array.fold_left(
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
    let wallType = buttonsWithPosition(env, w, h + wallButtonOffset, wallButtons, 10) |> Array.fold_left((current, (pos, (text, wallType, color))) => {
        if (SharedTypes.isWallTypeEnabled(ctx, wallType) && MyUtils.rectCollide(Env.mouse(env), (pos, (buttonWidth, buttonHeight)))) {
          wallType
        } else {
          current
        }
      },
      currentWallType(ctx)
    );
    let ctx = updateCurrentWallType(env, ctx, wallType);
    switch dest {
    | None => Same(ctx, ())
    | Some(dest) => Transition(ctx, dest)
    }
  },
  keyPressed: (ctx, _, env) => Same(ctx, ())
};
