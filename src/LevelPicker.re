open SharedTypes;

let initialState = ();

type buttonStatus =
  | Locked
  | Available
  | Beaten;

type button = {
  text: string,
  pos: (int, int),
  width: int,
  height: int,
  i: int,
  status: buttonStatus,
  enemies: list(Enemy.t),
};

let buttonsInPosition = (ctx, env) => {
  let buttons = ref([]);
  let top = 100;
  let w = Reprocessing.Env.width(env);
  let left = w / 8;
  let w = w - left - left;
  let margin = 10;
  let ratio = float_of_int(Reprocessing.Env.height(env)) /. float_of_int(Reprocessing.Env.width(env));
  let boxWidth = Reprocessing.Env.width(env) / 5 - margin;
  let boxHeight = int_of_float(float_of_int(boxWidth) *. ratio);
  let rowSize = (w - margin) / (boxWidth + margin);
  let stages = GravLevels.getStages(env);
  Array.iteri((stageNo, levels) => {
    for (i in 0 to Array.length(levels) - 1) {
      let col = i mod rowSize;
      let row = i / rowSize;
      let x = col * (boxWidth + margin) + left;
      let y = row * (boxHeight + margin) + top;
      buttons :=
        [
          {
            text: string_of_int(i + 1),
            pos: (x, y),
            width: boxWidth,
            height: boxHeight,
            i,
            enemies: levels[i],
            status: UserData.highestBeatenStage(ctx.userData) + 1 > i
              ? Beaten
              : (UserData.highestBeatenStage(ctx.userData) + 1 === i ? Available : Locked)
          },
          ...buttons^
        ]
    };
    },
    stages
  );
  buttons^
};

let center = ((x, y), w, h) => (x + w/2, y + h/2);

let drawEnemySquare = (env, enemies, (x, y), w, h) => {
  open Reprocessing;
  let fullW =
  Env.width(env);
  let fullH =
  Env.height(env);
  let scaleX = MyUtils.flDiv(w, fullW);
  let scaleY = MyUtils.flDiv(h, fullH);
  Draw.pushMatrix(env);
  Draw.translate(~x=float_of_int(x), ~y=float_of_int(y), env);
  Draw.scale(~x=scaleX, ~y=scaleY, env);
  List.iter(enemy => {
    Draw.noFill(env);
    Draw.stroke(enemy.Enemy.color, env);
    Draw.strokeWeight(20, env);
    GravShared.circle(
      ~center=enemy.Enemy.pos,
      ~rad=enemy.Enemy.size *. 2.,
      env
    );
  }, enemies);
  Draw.popMatrix(env);
};

let backButton = (ctx, env) => {
  let (x, y) = (Reprocessing.Env.width(env) / 2, Reprocessing.Env.height(env) - 10);
  let font = ctx.textFont;
  let text = "Back";
  /* let width = Font. */
  let width = switch font^ {
  | Some(font) => Reprocessing_Font.Font.calcStringWidth(env, font, text)
  | None => 0
  };
  let height = 40;
  let margin = 10;
  let textPos = (x - width / 2, y - height + 10);
  let pos = (x - width / 2 - margin, y - height);
  (pos, textPos, width + margin * 2, height, text)
};

let drawButton = (ctx, env, (pos, textPos, width, height, text)) => {
  open Reprocessing;
  Draw.fill(Button.color, env);
  Draw.rect(~pos, ~width, ~height, env);
  Draw.text(~pos=textPos, ~body=text, ~font=ctx.textFont, env);
};

let hitButton = (ctx, env, ((x, y), _, width, height, _)) => {
  let (a, b) = Reprocessing.Env.mouse(env);
  if (a >= x && a <= x + width && b >= y && b <= y + height) {
    true
  } else {
    false
  }
};

let screen =
  ScreenManager.stateless(
    ~run=
      (ctx, env) => {
        open Reprocessing;
        Draw.background(Constants.black, env);
        DrawUtils.centerText(
          ~font=ctx.titleFont,
          ~pos=(Env.width(env) / 2, 20),
          ~body="Pick a stage",
          env
        );
        let buttons = Array.mapi((i, _) => {
          ("Stage " ++ string_of_int(i + 1), `StartFromStage(i))
        }, ctx.stages) |> Array.to_list;
        Button.draw(
          ~enabled=((i, _) => i <= 1+ UserData.highestBeatenStage(ctx.userData)),
          (Env.width(env) / 2, 100),
          (Normal, buttons),
          ~ctx,
          ~env
        );
        drawButton(ctx, env, backButton(ctx, env));

        Stateless(ctx)
      },
    ~mouseDown=
      (ctx, env) => {
        let buttons = Array.mapi((i, _) => {
          ("Stage " ++ string_of_int(i + 1), i)
        }, ctx.stages) |> Array.to_list;
        open Reprocessing;
        let res = Button.hit(
          ~enabled=((i, _) => i <= 1+ UserData.highestBeatenStage(ctx.userData)),
          (Env.width(env) / 2, 100), (Normal, buttons), ~ctx, ~env, Env.mouse(env));
        switch res {
        | None => if (hitButton(ctx, env, backButton(ctx, env))) {
            Transition(ctx, `Quit)
          } else { Stateless(ctx) }
        | Some(dest) => Transition(ctx, `StartFromStage(dest))
        }
      },
    ~keyPressed=
      (ctx, env) =>
        Reprocessing.(
          switch (Env.keyCode(env)) {
          | Events.Escape => Transition(ctx, `Quit)
          | _ => Stateless(ctx)
          }
        ),
    ~backPressed= (ctx, _) => Some(Transition(ctx, `Quit)),
    ()
  );