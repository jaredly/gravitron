
open SharedTypes;


type buttons('a) = list((string, 'a));
type size = Huge | Normal | Small;

let height = size => switch size {
| Huge => 80
| Normal => 50
| Small => 30
};

let normalButtons = buttons => (Normal, buttons);
let smallButtons = buttons => (Normal, buttons);

let margin = size => switch size {
| Huge => 20
| Normal => 10
| Small => 5
};

let whichFont = (ctx) => fun
| Huge => ctx.titleFont
| Normal => ctx.textFont
| Small => ctx.smallFont ;

let getWidth = (env, font, text) => switch (font^) {
| None => 0
| Some(font) => Reprocessing_Font.Font.calcStringWidth(env, font, text)
};

let maxWidth = (env, font, buttons) => List.fold_left((a, (text, _)) => max(a, getWidth(env, font, text)), 0, buttons);

let color = Reprocessing.Utils.color(~r=50, ~g=50 ,~b=50, ~a=255);
let disabledColor = Reprocessing.Utils.color(~r=20, ~g=20 ,~b=20, ~a=255);

let drawInner = (~enabled, (x, y), width, (size, buttons), ~ctx, ~env) => {
  let margin = margin(size);
  let buttonHeight = height(size);


  open Reprocessing;
  Draw.fill(Utils.color(~r=50, ~g=50 ,~b=80, ~a=150), env);
  Draw.rect(~pos=(0, 0), ~width=Env.width(env), ~height=Env.height(env), env);

  List.iteri((i, (text, action)) => {
    let enabled = enabled(i, action);
    let y = y + i * (buttonHeight + margin);

    Draw.fill(
      enabled ? color : disabledColor
    , env);
    Draw.noStroke(env);

    if (enabled && MyUtils.rectCollide(Env.mouse(env), ((x,y), (width, buttonHeight)))) {
      Draw.strokeWeight(2, env);
      Draw.stroke(Utils.color(~r=100, ~g=100, ~b=100, ~a=255), env);
    };

    Draw.rect(~pos=(x, y), ~width, ~height=buttonHeight, env);
    DrawUtils.centerText(~font=ctx.textFont, ~body=text, ~pos=(x + width / 2, y + 15), env);
  }, buttons);
};

let hitInner = (~enabled, pos, (x, y), width, (size, buttons)) => {
  let buttonHeight = height(size);
  let margin = margin(size);

  List.fold_left(((i, res), (_, action)) => {
    let y = y + i * (buttonHeight + margin);
    switch res {
    | Some(x) => (i + 1, res)
    | None =>
      let enabled = enabled(i, action);
      if (enabled && MyUtils.rectCollide(pos, ((x,y), (width, buttonHeight)))) {
        (i + 1, Some(action))
      } else {
        (i + 1, None);
      }
    }
  }, (0, None), buttons) |> snd;
};

let allEnabled = (_, _) => true;

let draw = (~enabled=allEnabled, (cx, y), (size, buttons), ~ctx, ~env) => {
  let margin = margin(size);
  let buttonHeight = height(size);
  let width = maxWidth(env, whichFont(ctx, size), buttons) + margin * 4;

  let x = cx - width / 2;
  drawInner(~enabled, (x, y), width, (size, buttons), ~ctx, ~env);
};

let drawCentered = (~enabled=allEnabled, (cx, cy), (size, buttons), ~ctx, ~env) => {
  let margin = margin(size);
  let buttonHeight = height(size);
  let width = maxWidth(env, whichFont(ctx, size), buttons) + margin * 4;
  let height = List.length(buttons) * (margin + buttonHeight) - margin;

  let x = cx - width / 2;
  let y = cy - height / 2;
  drawInner(~enabled, (x, y), width, (size, buttons), ~ctx, ~env);
};

let hit = (~enabled=allEnabled, (cx, y), (size, buttons), ~ctx, ~env, pos) => {
  let margin = margin(size);
  let buttonHeight = height(size);
  let width = maxWidth(env, whichFont(ctx, size), buttons) + margin * 4;

  let x = cx - width / 2;
  hitInner(~enabled, pos, (x, y), width, (size, buttons));
};

let hitCentered = (~enabled=allEnabled, (cx, cy), (size, buttons), ~ctx, ~env, pos) => {
  let margin = margin(size);
  let buttonHeight = height(size);
  let width = maxWidth(env, whichFont(ctx, size), buttons) + margin * 4;
  let height = List.length(buttons) * (margin + buttonHeight) - margin;

  let x = cx - width / 2;
  let y = cy - height / 2;
  hitInner(~enabled, pos, (x, y), width, (size, buttons));
};
