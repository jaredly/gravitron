
open Reprocessing;

type align =
  | Left
  | Right
  | Center;

type valign =
  | Top
  | Bottom
  | Middle;

type textStyle = {
  font: fontT,
  tint: option(colorT)
};

type buttonStyle = {
  textStyle,
  bgColor: colorT,
  borderColor: colorT,
  hoverBorderColor: colorT,
  innerBorder: option(colorT),
  fixedWidth: option(int),
  enabled: bool,
  margin: int
};

type element('action) =
  | Text(string, textStyle, align)
  | Button(string, 'action, buttonStyle)
  | Spacer(int)
  | VBox(list(element('action)), int, align)
  | Custom(glEnvT => (int, int), (glEnvT, (int, int)) => unit, (glEnvT, (int, int)) => option('action))
  ;

let getTextWidth = (env, font, text) => switch font^ {
  | None => 0
  | Some(font) => Reprocessing_Font.Font.calcStringWidth(env, font, text)
};

let measureText = (env, font, text) => switch font^ {
| None => (0, 0)
| Some(font) => {
  let x = Reprocessing_Font.Font.getChar(font, 'X');
  let width = Reprocessing_Font.Font.calcStringWidth(env, font, text);
  (width, x.Reprocessing_Font.Font.height)
}
};

let addBoth = ((a, b), (c, d)) => (a + c, b + d);

let rec measure = (env, element) => switch element {
| Text(text, style, _) => measureText(env, style.font, text)
| Button(text, _, style) => {
  let (w, h) = measureText(env, style.textStyle.font, text);
  let w = switch style.fixedWidth {
  | Some(w) => w
  | None => w + style.margin * 2
  };
  (w, h + style.margin * 2)
}
| Custom(measure, draw, act) => measure(env)
| Spacer(height) => (0, height)
| VBox(items, spacer, _align) => {
  let (w, h) = List.fold_left(
    ((tw, th), item) => {
      let (w, h) = measure(env, item);
      (max(w, tw), h + spacer + th)
    },
    (0, 0),
    items
  );
  (w, max(0, h - spacer))
}
};

let rec draw = (env, element, (x, y), align, valign) => {
  let (w, h) = measure(env, element);
  let x = switch align {
  | Left => x
  | Right => x - w
  | Center => x - w/2
  };
  let y = switch valign {
  | Top => y
  | Middle => y - h/2
  | Bottom => y - h
  };
  switch element {
  | Text(text, {font, tint}, align) => {
    switch (tint) {
    | Some(color) => Draw.tint(color, env)
    | None => Draw.noTint(env)
    };
    Draw.text(~body=text, ~font, ~pos=(x,y), env);
    Draw.noTint(env);
  }
  | Button(text, _, style) => {
    Draw.fill(style.bgColor, env);
    Draw.strokeWeight(2, env);
    Draw.stroke(style.borderColor, env);

    if (style.enabled && MyUtils.rectCollide(Env.mouse(env), ((x, y), (w, h)))) {
      Draw.stroke(style.hoverBorderColor, env);
    };

    Draw.rect(~pos=(x, y), ~width=w, ~height=h, env);

    switch (style.innerBorder) {
    | None => ()
    | Some(color) => {
      Draw.stroke(color, env);Draw.noFill(env);
      Draw.rect(~pos=(x + style.margin/2, y + style.margin/2), ~width=w-style.margin, ~height=h-style.margin, env);
    }
    };

    let x = switch (style.fixedWidth) {
    | None => x + style.margin
    | Some(_) => {
      x + w / 2 - getTextWidth(env, style.textStyle.font, text) /  2
    }
    };
    switch (style.textStyle.tint) {
    | Some(color) => Draw.tint(color, env)
    | None => Draw.noTint(env)
    };
    Draw.text(~pos=(x, y + style.margin), ~body=text, ~font=style.textStyle.font, env);
    Draw.noTint(env);
  }
  | Custom(_measure, draw, _act) => draw(env, (x, y))
  | Spacer(_) => ()
  | VBox(items, spacer, childAlign) => {
    let x = switch childAlign {
    | Left => x
    | Center => x + w/2
    | Right => x + w
    };
    List.fold_left(
      (y, item) => {
        let (w, h) = draw(env, item, (x, y), childAlign, Top);
        y + h + spacer
      },
      y,
      items
    ) |> ignore;
  }
  };
  (w, h)
};

let rec act = (env, element, (x, y), align, valign) => {
  let (w, h) = measure(env, element);
  let x = switch align {
  | Left => x
  | Right => x - w
  | Center => x - w/2
  };
  let y = switch valign {
  | Top => y
  | Middle => y - h/2
  | Bottom => y - h
  };
  let action = switch element {
  | Button(text, action, style) => {
    if (style.enabled && MyUtils.rectCollide(Env.mouse(env), ((x, y), (w, h)))) {
      Some(action)
    } else {
      None
    }
  }
  | Custom(_measure, _draw, act) => act(env, (x, y))
  | VBox(items, spacer, childAlign) => {
    let x = switch childAlign {
    | Left => x
    | Center => x + w/2
    | Right => x + w
    };
    let (_, action) = List.fold_left(
      ((y, action), item) => {
        switch (action) {
        | Some(x) => (0, action)
        | _ =>
        let ((w, h), action) = act(env, item, (x, y), childAlign, Top);
        (y + h + spacer, action)
        }
      },
      (y, None),
      items
    );
    action
  }
  | _ => None
  };

  ((w, h), action)
};

let act = (env, element, pos, align, valign) => {
  snd(act(env, element, pos, align, valign))
};

type rootElement('action) = {
  el: element('action),
  align,
  valign,
  pos: (int, int)
};

let act = (env, {el, align, valign, pos}) => act(env, el, pos, align, valign);
let draw = (env, {el, align, valign, pos}) => draw(env, el, pos, align, valign) |> ignore;
