
open Reprocessing;
let buttonPos = env => (Env.width(env) / 2, Env.height(env) / 2);

let buttons = Button.normalButtons([("Resume", `Resume), ("Home", `Quit)]);

let draw = (ctx, env) => {
  Draw.fill(Utils.color(~r=50, ~g=50 ,~b=80, ~a=150), env);
  Draw.rect(~pos=(0, 0), ~width=Env.width(env), ~height=Env.height(env), env);

  Button.drawCentered(buttonPos(env), buttons, ~ctx, ~env);
};

let mouseDown = (ctx, env) => {
  Button.hitCentered(buttonPos(env), buttons, ~ctx, ~env, Env.mouse(env))
};
