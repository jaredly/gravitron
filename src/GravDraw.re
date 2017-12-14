open Reprocessing;

open GravShared;

open MyUtils;

open SharedTypes;
let rect = (~center as (x, y), ~w, ~h, env) =>
  Draw.rectf(~pos=(x -. w /. 2., y -. h /. 2.), ~width=w, ~height=h, env);

let scale = (d) => sqrt(d);

let triangle = (~tip as (x, y), ~size as (w, h), ~angle, env) => {
  let theta = atan2(w /. 2., h);
  let sideLen = MyUtils.dist((w /. 2., h));
  let p2 = (
    x +. cos(angle +. theta) *. sideLen,
    y +. sin(angle +. theta) *. sideLen,
  );
  let p3 = (
    x +. cos(angle -.theta) *. sideLen,
    y +. sin(angle -.theta) *. sideLen,
  );
  Draw.trianglef(~p1=(x, y), ~p2, ~p3, env);
};

let drawOnScreen = (~color, ~center as (x, y), ~rad, ~stroke=false, ~strokeWeight=3, env) => {
  let height = Env.height(env) |> float_of_int;
  let width = Env.width(env) |> float_of_int;
  let (height, width) = isPhone ? (height *. phoneScale, width *. phoneScale) : (height, width);
  Draw.fill(withAlpha(color, 0.6), env);
  Draw.noStroke(env);
  let size = 8.;
  let tri = (tip) => {
    let dist = MyUtils.dist(MyUtils.posSub(tip, (x, y)));
    let alpha = max(0., min(1., 1. -. dist /. 1000.));
    Draw.fill(withAlpha(color, alpha), env);
    Draw.stroke(withAlpha(color, 0.6), env);
    triangle(~tip, ~size=(8., 16.), ~angle=MyUtils.thetaToward((x, y), tip), env);
  };
  if (x +. rad < 0.) {
    if (y +. rad < 0.) {
      /* let size = (8., 8.); */
      tri((0., 0.))
      /* triangle(~tip=(0., 0.), ~size, ~angle=Constants.pi /. 2., env); */
    } else if (y -. rad > height) {
      tri((0., height));
    } else {
      tri((0., y));
    }
  } else if (x -. rad > width) {
    if (y +. rad < 0.) {
      tri((width, 0.));
    } else if (y -. rad > height) {
      tri((width, height));
    } else {
      tri((width, y));
    }
  } else if (y +. rad < 0.) {
    tri((x, 0.));
  } else if (y -. rad > height) {
    tri((x, height));
  } else {
    if (stroke) {
      Draw.stroke(color, env);
      Draw.strokeWeight(strokeWeight, env);
      Draw.noFill(env)
    } else {
      Draw.fill(color, env);
      Draw.noStroke(env)
    };
    circle(~center=(x, y), ~rad, env)
  }
};

let drawHelp = (ctx, player, env) => {
  let (x, y) = player.Player.pos;
  let x = int_of_float(x);
  let y = int_of_float(y) + 30;
  DrawUtils.centerText(~font=ctx.smallFont, ~pos=(x, y), ~body="Arrow keys to move", env);
  DrawUtils.centerText(~font=ctx.smallFont, ~pos=(x, y + 25), ~body="Avoid the missiles", env);
  DrawUtils.centerText(~font=ctx.smallFont, ~pos=(x, y + 50), ~body="Gravity is your only weapon", env);
  ()
};

let drawWalls = (env, color) => {
  Draw.noStroke(env);
  Draw.fill(color, env);
  let w = Env.width(env) |> float_of_int;
  let h = Env.height(env) |> float_of_int;
  Draw.rectf(~pos=(0., 0.), ~width=w, ~height=GravStep.wallSize, env);
  Draw.rectf(~pos=(0., 0.), ~width=GravStep.wallSize, ~height=h, env);
  Draw.rectf(~pos=(0., h -. GravStep.wallSize), ~width=w, ~height=GravStep.wallSize, env);
  Draw.rectf(~pos=(w -. GravStep.wallSize, 0.), ~width=GravStep.wallSize, ~height=h, env);
};

let drawStatus = (ctx, wallType, level, me, env) => {
  switch (wallType) {
  | FireWalls => drawWalls(env, fireWallColor)
  | BouncyWalls => drawWalls(env, bouncyWallColor)
  | Minimapped => ()
  };
  let margin = 20;
  let fmargin = float_of_int(margin);
  let percent = flDiv(me.Player.health, fullPlayerHealth);
  Draw.strokeWeight(1, env);
  Draw.stroke(Constants.white, env);
  Draw.noFill(env);
  Draw.rect(~pos=(margin, margin), ~width=100, ~height=10, env);
  Draw.fill(Constants.white, env);
  Draw.noStroke(env);
  Draw.rect(~pos=(margin, margin), ~width=int_of_float(100. *. percent), ~height=10, env);
  for (i in 0 to me.Player.lives) {
    circle(~center=(float_of_int(i * 15 + 100 + 10 + margin), fmargin +. 5.), ~rad=5., env)
  };
  DrawUtils.textRightJustified(
    ~font=ctx.smallFont,
    ~body="Level " ++ string_of_int(level + 1),
    ~pos=(Env.width(env) - margin, margin - 5),
    env
  )
};

let drawJoystick = (env) => {
  Draw.fill(Constants.green, env);
  Draw.noStroke(env);
  circle(~center=joystickPos(env), ~rad=5., env);
  Draw.stroke(Constants.green, env);
  Draw.noFill(env);
  circle(~center=joystickPos(env), ~rad=35., env)
};

let fldiv = (a, b) => float_of_int(a) /. float_of_int(b);

let drawMe = (me, env) => {
  open Player;

  drawOnScreen(~color=withAlpha(me.color, 0.3), ~center=me.pos, ~rad=me.size, env);
  let health = fldiv(me.health, fullPlayerHealth);

  drawOnScreen(~color=me.color, ~center=me.pos, ~rad=me.size *. health, env);
  Draw.noFill(env);
  Draw.stroke(withAlpha(Constants.green, health), env);
  Draw.strokeWeight(2, env);
  circle(
    ~center=me.pos,
    ~rad=me.size +. 1.,
    env
  );
  Draw.noStroke(env)
};

let drawMinimap = (bullets, me, env) => {
  let w = Env.width(env) |> float_of_int;
  let h = Env.height(env) |> float_of_int;
  let size = 100.;
  let scale = 3.;
  let ow = w *. scale;
  let oh = h *. scale;
  let xs = size /. ow;
  let ys = size /. oh;
  let dx = w;
  let dy = h;

  let mpos = (w -. size, h -. size);
  let toMapCoords = ((x, y)) => {
    let x = (x +. dx) *. xs;
    let y = (y +. dy) *. ys;
    posAdd((x, y), mpos)
  };

  Draw.noStroke(env);
  List.iter(
    bullet => {
      open Bullet;
      let (x, y) = toMapCoords(bullet.pos);
      Draw.fill(bullet.color, env);
      Draw.rectf(~pos=(x -. 1., y -. 1.), ~width=2., ~height=2., env);
    },
    bullets
  );

  let (x, y) = toMapCoords(me.Player.pos);
  Draw.fill(me.Player.color, env);
  Draw.rectf(~pos=(x -. 2., y -. 2.), ~width=4., ~height=4., env);

  Draw.fill(Reprocessing.Utils.color(~r=255, ~g=255, ~b=255, ~a=50), env);
  Draw.rectf(~pos=toMapCoords((0., 0.)), ~width=(w *. xs), ~height=(h *. ys), env);
};

let getCircleParams = (radius, numCircles, spin) => {
  /* let halfAngle = Constants.pi *. (1. -. 1. /. (numCircles -. 1.)); */
  let halfAngle = Constants.pi *. (numCircles -. 2.) /. numCircles /. 2.;
  let s = cos(halfAngle);
  /* let s = cos(Constants.pi /. float_of_int(numCircles)); */
  let circleRadius = radius /. (1. +. 1. /. s);
  let polygonRadius = radius -. circleRadius;
  let by = Constants.two_pi /. numCircles;
  let circles = ref([]);
  /* let intt = int_of_float(numCircles); */
  /* let intt = intt > 3 ? intt : 5; */
  for (i in 0 to int_of_float(numCircles) - 1) {
    let fi = float_of_int(i);
    let t = by *. fi +. spin;
    let center = (
      cos(t) *. polygonRadius,
      sin(t) *. polygonRadius,
    );
    circles := [
      (center, circleRadius),
      ...circles^
    ];
  };
  circles^
};

let drawEnemy = (env, enemy) => {
  open Enemy;
  let (warmup, maxval) = enemy.warmup;
  let rad = enemy.size *. warmup /. maxval;
  drawOnScreen(
    ~color=enemy.color,
    ~center=enemy.pos,
    ~rad=rad,
    ~stroke=true,
    env
  );
  let (current, full) = enemy.health;
  if (full > 1) {
    Draw.fill(withAlpha(enemy.color, 0.6), env);
    Draw.noStroke(env);
    switch (enemy.behavior) {
    | Asteroid(_, animate, _) => {
      List.iter(
        ((center, rad)) => {
          circle(~center=posAdd(center, enemy.pos), ~rad, env);
        },
        getCircleParams(rad, full === 2 ? 2. : float_of_int(full - 1) ** 2., -. animate /. 5. /. float_of_int(full))
      )
    }
    | _ => {
      let sweep = Constants.two_pi /. float_of_int(full);
      Draw.stroke(withAlpha(enemy.color, 0.6), env);
      let width = int_of_float(rad) - 5;
      Draw.strokeWeight(width, env);
      Draw.noFill(env);
      for (i in 0 to current - 1) {
        let f = float_of_int(i);
        Draw.arcf(~center=enemy.pos,
        ~radx = max(0., rad -. float_of_int(width) /. 2.),
        ~rady = max(0., rad -. float_of_int(width) /. 2.),
        ~start = sweep *. f,
        ~stop = sweep *. f +. sweep,
        ~isOpen = true,
        ~isPie = false,
        env
        );
      }
    }
    }
  };

  if (warmup === maxval) {
    switch (enemy.behavior) {
    | Asteroid(timer, _, _)
    | TripleShooter(timer, _)
    | ScatterShot(timer, _, _, _)
    | SimpleShooter(timer, _) =>
    let loaded = fst(timer) /. snd(timer);
    Draw.noFill(env);
    Draw.stroke(withAlpha(Constants.white, 0.4), env);
    Draw.strokeWeight(2, env);
    Draw.arcf(
      ~center=enemy.pos,
      ~radx=rad +. 5.,
      ~rady=rad +. 5.,
      ~start=0.,
      ~stop=Constants.two_pi *. loaded,
      ~isOpen=true,
      ~isPie=false,
      env
    );
    Draw.noStroke(env)
    }
  }
};

let drawBullet = (env, bullet) => {
  open Bullet;
  switch bullet.behavior {
  | Normal => drawOnScreen(~color=bullet.color, ~center=bullet.pos, ~rad=bullet.size, env)
  | Scatter(_, counter, _) => {
    let loaded = fst(counter) /. snd(counter);
    drawOnScreen(~color=bullet.color, ~center=bullet.pos, ~rad=bullet.size *. (1. -. loaded), env);
    Draw.noFill(env);
    Draw.stroke(bullet.color, env);
    circle(~center=bullet.pos, ~rad=bullet.size, env);
  }
  }
};

let drawExplosion = (env, explosion) => {
  open Explosion;
  let (current, total) = explosion.timer;
  let faded = 1. -. current /. total;
  Draw.fill(withAlpha(explosion.color, faded), env);
  Draw.noStroke(env);
  let size = (1.5 -. 0.5 *. faded) *. explosion.size;
  circle(~center=explosion.pos, ~rad=size, env)
};