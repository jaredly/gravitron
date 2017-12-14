
open Reprocessing;
let buttonPos = env => (Env.width(env) / 2, Env.height(env) / 2);

let buttons = Button.normalButtons([("Resume", `Resume), ("Home", `Quit)]);

let draw = (ctx, env) => {
  Button.drawCentered(buttonPos(env), buttons, ~ctx, ~env);
};

let mouseDown = (ctx, env) => {
  Button.hitCentered(buttonPos(env), buttons, ~ctx, ~env, Env.mouse(env))
};
