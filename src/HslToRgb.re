
let hslToRgb = (hue, saturation, lightness) => {
  /* based on algorithm from http://en.wikipedia.org/wiki/HSL_and_HSV#Converting_to_RGB */
  let chroma = (1. -. abs_float((2. *. lightness) -. 1.)) *. saturation;
  let huePrime = hue / 60;
  let secondComponent = chroma *. (1. -. abs_float(float_of_int(huePrime mod 2) -. 1.));

  /* huePrime = floor(huePrime); */
  let (red, green, blue) =
  switch huePrime {
  | 0 => (chroma, secondComponent, 0.)
  | 1 => (secondComponent, chroma, 0.)
  | 2 => (0., chroma, secondComponent)
  | 3 => (0., secondComponent, chroma)
  | 4 => (secondComponent, 0., chroma)
  | 5 => (chroma, 0., secondComponent)
  | _ => failwith("Invalid hue component")
  };

  let l = lightness -. (chroma /. 2.);
  let (red, green, blue) = (red +. l, green +. l, blue +. l);

  (int_of_float(red *. 255.), int_of_float(green *. 255.), int_of_float(blue *. 255.))
};

let hsla = (~h, ~s, ~l, ~a) => {
  let (r, g, b) = hslToRgb(h, s, l);
  Reprocessing.Utils.color(~r, ~g, ~b, ~a)
};