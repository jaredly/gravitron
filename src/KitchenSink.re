
open Reprocessing;

type state = {
  font: fontT,
  t: float,
};

let setup = (assetDir, env) => {
  Env.size(~width=400, ~height=800, env);
  {
    t: 0.,
    font: Draw.loadFont(~filename=Filename.concat(assetDir, "SFCompactDisplay-Regular-16.fnt"), ~isPixel=false, env),
  }
};

let stroke = (env, t) => {
  /* TODO strokes, beziers, etc. */
  ()
};

let matrix = (env, t) => {
  Draw.pushMatrix(env);

  let by = mod_float(t, 20.) *. 10.;
  let by = sin(t *. 2.) *. 5.;
  Draw.translate(~x=200. -. by *. 2., ~y=200., env);

  Draw.shear(~x=by /. 40., ~y=by /. 60., env);

  Draw.scale(~x=by /. 20. +. 1., ~y=by /. 60. +. 1., env);

  Draw.stroke(Utils.color(~r=200, ~g=200, ~b=100, ~a=200), env);

  Draw.noFill(env);
  Draw.strokeWeight(10, env);
  Draw.curve(
    (-500., 1000.),
    (-100., 50.),
    (100., 50.),
    (500., -1000.),
    env
  );

  Draw.stroke(Utils.color(~r=0, ~g=200, ~b=100, ~a=200), env);
  Draw.line(
    ~p1=(-100, -50),
    ~p2=(100, -50),
    env
  );

  Draw.fill(Utils.color(~r=255, ~g=200, ~b=255, ~a=200), env);
  Draw.ellipse(
    ~center=(-100, -100),
    ~radx=20,
    ~rady=20,
    env
  );

  Draw.quad(
    ~p1=(100, -100),
    ~p2=(150, -150),
    ~p3=(100, -150),
    ~p4=(150, -100),
    env
  );

  /** TODO not on matrix */
  Draw.pixel(~pos=(50, 100), ~color=Constants.white, env);

  Draw.triangle(
    ~p1=(0, -100),
    ~p2=(50, -150),
    ~p3=(0, -150),
    env
  );

  Draw.bezier(
    ~p1=(-50., 100.),
    ~p2=(-100., 150.),
    ~p3=(150., 150.),
    ~p4=(100. +. by, 100.),
    env
  );

  Draw.strokeWeight(4, env);
  let fi = mod_float(t, Constants.two_pi);
  Draw.arc(
    ~center=(-100, 200),
    ~radx=20,
    ~rady=30,
    ~start=0.,
    ~stop=fi,
    ~isOpen=true,
    ~isPie=false,
    env
  );
  Draw.arc(
    ~center=(-130, 200),
    ~radx=20,
    ~rady=30,
    ~start=0.,
    ~stop=fi,
    ~isOpen=false,
    ~isPie=false,
    env
  );
  Draw.arc(
    ~center=(-70, 200),
    ~radx=20,
    ~rady=30,
    ~start=0.,
    ~stop=fi,
    ~isOpen=true,
    ~isPie=true,
    env
  );
  Draw.arc(
    ~center=(-40, 200),
    ~radx=20,
    ~rady=30,
    ~start=0.,
    ~stop=fi,
    ~isOpen=false,
    ~isPie=true,
    env
  );


  Draw.stroke(Constants.white, env);

  for (i in 0 to 8) {
    Draw.fill(Utils.color(~r=i * 255 / 8, ~g=255 - i * 255 / 8, ~b=i * 255 / 8, ~a=100), env);
    Draw.strokeWeight(i / 3, env);

    if (i mod 2 == 1) {
      Draw.noFill(env);
    };

    Draw.rect(~pos=(20, 20), ~width=40, ~height=40, env);
    Draw.rotate(Constants.pi /. 4., env);
    Draw.scale(~x=0.95, ~y=0.95, env);
  };

  Draw.popMatrix(env);
};

let draw = ({font, t} as state, env) => {
  Draw.background(Constants.black, env);

  matrix(env, t);

  let (x, y) = Env.mouse(env);
  Draw.text(~font, ~body="Mouse: " ++ string_of_int(x) ++ "," ++ string_of_int(y), ~pos=(10, 10), env);

  {...state, t: t +. Env.deltaTime(env)}
};

run(~setup=setup("./assets"), ~draw, ());