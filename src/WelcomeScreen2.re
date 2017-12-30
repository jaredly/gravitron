open SharedTypes;
open Reprocessing;

let buttonStyle = font => UIManager.{
  textStyle: {font, tint: None},
  bgColor: MyUtils.withAlpha(Constants.white, 0.2),
  hoverBorderColor: Utils.color(~r=100, ~g=100, ~b=100, ~a=255),
  borderColor: Constants.black,
  innerBorder: None,
  fixedWidth: Some(170),
  enabled: true,
  margin: 15
};

let wallColor = wall => switch (wall) {
| FireWalls => fireWallColor
| BouncyWalls => bouncyWallColor
| Minimapped => Constants.black
};

let startButton = (ctx, env) => {
  let highest = UserData.highestBeatenStage(ctx.userData);
  let hasWon = highest == Array.length(ctx.stages) - 1;

  UIManager.Button(
    hasWon ? "Complete" : "Start - " ++ string_of_int(highest + 2),
    hasWon ? `Go(`Start) : `Go(`StartFromStage(highest + 1)),
    {...buttonStyle(ctx.textFont), innerBorder: Some(wallColor(currentWallType(ctx)))}
  )
};

let wallButton = (ctx, env, name, typ) => SharedTypes.isWallTypeEnabled(ctx, typ)
? UIManager.Button(
  name,
  `Wall(typ),
  {
    ...buttonStyle(ctx.textFont),
    innerBorder: currentWallType(ctx) == typ
      ? Some(MyUtils.withAlpha(Constants.white, 0.4)) : None,
    bgColor: Constants.black,
    hoverBorderColor: Constants.white,
    borderColor: wallColor(typ),
    enabled: true
  }
)
: UIManager.Button(
  "LOCKED",
  `Wall(typ),
  {
    ...buttonStyle(ctx.boldTextFont),
    bgColor: Constants.black,
    textStyle: {font: ctx.boldTextFont, tint: Some(Utils.color(~r=100, ~g=100, ~b=100, ~a=255))},
    hoverBorderColor: Constants.white,
    borderColor: wallColor(typ),
    enabled: false
  }
)
;

let mainUI = (ctx, env) => UIManager.VBox(
  [
    Text("Gravitron", {font: ctx.titleFont, tint: None}, Center),
    Spacer(20),
    startButton(ctx, env),
    Button("Pick stage", `Go(`PickLevel), buttonStyle(ctx.textFont)),
    Button("Free play", `Go(`PickFreePlay), buttonStyle(ctx.textFont)),
    Spacer(10),
    Text("Wall type", {font: ctx.smallFont, tint: None}, Center),
    wallButton(ctx, env, "bouncy", BouncyWalls),
    wallButton(ctx, env, "solid", FireWalls),
    wallButton(ctx, env, "no walls", Minimapped),
    Spacer(20)
  ],
  10,
  Center
);

let root = (ctx, env) => UIManager.{
  el: mainUI(ctx, env),
  align: Center,
  valign: Middle,
  pos: (Env.width(env) / 2, Env.height(env) / 2)
};

let highScores = (ctx, env) => UIManager.{
  el: Button("High scores", `HighScores, {...buttonStyle(ctx.textFont), fixedWidth: None}),
  align: Center,
  valign: Bottom,
  pos: (Env.width(env) / 2, Env.height(env) - 10)
};

let initialState = env => ();

let run = (ctx, env) => {
  Draw.background(Constants.black, env);
  UIManager.draw(env, root(ctx, env));
  UIManager.draw(env, highScores(ctx, env));
  ()
};

let mouseDown = (ctx, env) => {
  switch (UIManager.act(env, root(ctx, env))) {
  | Some(`Go(destination)) => ScreenManager.Screen.Transition(ctx, destination)
  | Some(`Wall(typ)) => {
    let ctx = updateCurrentWallType(env, ctx, typ);
    Same(ctx, ())
  }
  | None => switch (UIManager.act(env, highScores(ctx, env))) {
  | Some(destination) => ScreenManager.Screen.Transition(ctx, destination)
  | None => ScreenManager.Screen.Same(ctx, ())
  }
  }
};

let screen = ScreenManager.Screen.{
  ...ScreenManager.empty,
  run: (ctx, _, env) => Same(ctx, run(ctx, env)),
  mouseDown: (ctx, _, env) => mouseDown(ctx, env)
};
