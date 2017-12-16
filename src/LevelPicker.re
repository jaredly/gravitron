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
  Array.iteri(
    (stageNo, levels) => {


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
            status: UserData.highestBeatenLevel(ctx.userData) + 1 > i
              ? Beaten
              : (UserData.highestBeatenLevel(ctx.userData) + 1 === i ? Available : Locked)
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

let screen =
  ScreenManager.stateless(
    ~run=
      (ctx, env) => {
        open Reprocessing;
        Draw.background(Constants.black, env);
        DrawUtils.centerText(
          ~font=ctx.titleFont,
          ~pos=(Env.width(env) / 2, 20),
          ~body="Pick a level",
          env
        );
        List.iter(
          ({text, pos, width, height, enemies, status}) => {
            if (status === Beaten || true) {
              drawEnemySquare(env, enemies, pos, width, height);
            } else {
              Draw.fill(status === Locked
                ? Utils.color(~r=50, ~g=50, ~b=50, ~a=255)
                : Utils.color(~r=100, ~g=100, ~b=100, ~a=255)
                , env);
              Draw.noStroke(env);
              Draw.rect(~pos, ~width, ~height, env);
            };
            Draw.noFill(env);
            let hovered = MyUtils.rectCollide(Reprocessing.Env.mouse(env), (pos, (width, height)));
            Draw.stroke(if (hovered) {
              switch status {
              | Locked => Utils.color(~r=100, ~g=100, ~b=100, ~a=255)
              | _ => Constants.green
              }
            } else switch status {
            | Locked | Beaten => Utils.color(~r=100, ~g=100, ~b=100, ~a=255)
            | Available => Constants.white
            }, env);
            Draw.strokeWeight(hovered && status !== Locked ? 3 : 1, env);
            Draw.rect(~pos, ~width, ~height, env);
            if (status !== Beaten) {
              let (x, y) = center(pos, width, height);
              DrawUtils.centerText(~font=ctx.textFont, ~body=text, ~pos=(x, y - 16), env)
            }
          },
          buttonsInPosition(ctx, env)
        );
        Stateless(ctx)
      },
    ~mouseDown=
      (ctx, env) => {
        let res =
          List.fold_left(
            (current, {pos, width, height, i, status}) =>
              switch current {
              | Some(_) => current
              | None =>
                if ((status !== Locked || true)
                    && MyUtils.rectCollide(Reprocessing.Env.mouse(env), (pos, (width, height)))) {
                  Some(i)
                } else {
                  None
                }
              },
            None,
            buttonsInPosition(ctx, env)
          );
        switch res {
        | None => Stateless(ctx)
        | Some(dest) => Transition(ctx, `StartFromLevel(dest))
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