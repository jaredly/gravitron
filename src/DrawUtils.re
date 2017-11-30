
let centerText = (~pos as (x, y), ~font, ~body, env) =>
  switch font^ {
  | None => ()
  | Some(innerFont) =>
    let width = Reprocessing_Font.Font.calcStringWidth(env, innerFont, body);
    Reprocessing.Draw.text(~font, ~body, ~pos=(x - width / 2, y), env)
  };
