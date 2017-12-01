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
};

/** TODO show a mini show of the level, so circles for the enemies you'll face */
let buttonsInPosition = (ctx, env) => {
  let buttons = ref([]);
  let w = Reprocessing.Env.width(env);
  let boxSize = 60;
  let margin = 10;
  let rowSize = (w - margin) / (boxSize + margin);
  let levels = GravLevels.getLevels(env);
  for (i in 0 to Array.length(levels) - 1) {
    let col = i mod rowSize;
    let row = i / rowSize;
    let x = col * (boxSize + margin) + margin;
    let y = row * (boxSize + margin) + margin;
    buttons :=
      [
        {
          text: string_of_int(i + 1),
          pos: (x, y),
          width: boxSize,
          height: boxSize,
          i,
          status: ctx.highestBeatenLevel + 1 > i
            ? Beaten
            : (ctx.highestBeatenLevel + 1 === i ? Available : Locked)
        },
        ...buttons^
      ]
  };
  buttons^
};

let center = ((x, y), w, h) => (x + w/2, y + h/2);

let screen =
  ScreenManager.stateless(
    ~run=
      (ctx, env) => {
        open Reprocessing;
        Draw.background(Constants.black, env);
        List.iter(
          ({text, pos, width, height, i, status}) => {
            Draw.noFill(env);
            Draw.stroke(switch status {
            | Locked => Utils.color(~r=100, ~g=100, ~b=100, ~a=255)
            | Available => Constants.white
            | Beaten => Constants.green
            }, env);
            Draw.strokeWeight(3, env);
            Draw.rect(~pos, ~width, ~height, env);
            Draw.text(~font=ctx.textFont, ~body=text, ~pos=center(pos, width, height), env)
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
                if (status !== Locked
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
    ()
  );