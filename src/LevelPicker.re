open SharedTypes;

let initialState = ();

/** TODO show a mini show of the level, so circles for the enemies you'll face */
let buttonsInPosition = (ctx, env) => {
  let buttons = ref([]);
  let w = Reprocessing.Env.width(env);
  let boxSize = 60;
  let margin = 10;
  let rowSize = (w - margin) / (boxSize + margin);
  for (i in 0 to Array.length(GravLevels.levels) - 1) {
    let col = i mod rowSize;
    let row = i / rowSize;
    let x = col * (boxSize + margin) + margin;
    let y = row * (boxSize + margin) + margin;
    buttons :=
      [
        (
          string_of_int(i + 1),
          (x + boxSize / 2, y + boxSize / 2),
          (x, y),
          boxSize,
          boxSize,
          i,
          ctx.highestBeatenLevel + 1 >= i
        ),
        ...buttons^
      ]
  };
  buttons^
};

let screen =
  ScreenManager.stateless(
    ~run=
      (ctx, env) => {
        open Reprocessing;
        Draw.background(Constants.black, env);
        List.iter(
          ((text, textpos, pos, width, height, i, enabled)) => {
            Draw.noFill(env);
            Draw.stroke(enabled ? Constants.green : Constants.white, env);
            Draw.strokeWeight(3, env);
            Draw.rect(~pos, ~width, ~height, env);
            Draw.text(~font=ctx.textFont, ~body=text, ~pos=textpos, env)
          },
          buttonsInPosition(ctx, env)
        );
        Stateless(ctx)
      },
    ~mouseDown=
      (ctx, env) => {
        let res =
          List.fold_left(
            (current, (_, _, pos, width, height, i, enabled)) =>
              switch current {
              | Some(x) => current
              | None =>
                if (enabled
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