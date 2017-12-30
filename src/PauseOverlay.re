
open SharedTypes;
open Reprocessing;

let style = font => {
  ...WelcomeScreen2.buttonStyle(font),
  fixedWidth: Some(150),
  margin: 20
};

let root = (env, ctx) => UIManager.{
  el: VBox([
    Button("Resume", `Resume, style(ctx.textFont)),
    Button("Home", `Quit, style(ctx.textFont)),
  ], 10, Center),
  pos: (Env.width(env) / 2, Env.height(env) / 2),
  align: Center,
  valign: Middle
};

let draw = (ctx, env) => {
  Draw.fill(Utils.color(~r=50, ~g=50 ,~b=80, ~a=150), env);
  Draw.rect(~pos=(0, 0), ~width=Env.width(env), ~height=Env.height(env), env);

  UIManager.draw(env, root(env, ctx));
};

let mouseDown = (ctx, env) => {
  UIManager.act(env, root(env, ctx))
};
