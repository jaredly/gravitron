open Reprocessing;

open GravShared;

open MyUtils;

open SharedTypes;
let rect = (~center as (x, y), ~w, ~h, env) =>
  Draw.rectf(~pos=(x -. w /. 2., y -. h /. 2.), ~width=w, ~height=h, env);

let scale = (d) => sqrt(d);

let drawOnScreen = (~color, ~center as (x, y), ~rad, ~stroke=false, ~strokeWeight=3, env) => {
  let height = Env.height(env) |> float_of_int;
  let width = Env.width(env) |> float_of_int;
  let (height, width) = isPhone ? (height *. phoneScale, width *. phoneScale) : (height, width);
  Draw.fill(withAlpha(color, 0.6), env);
  Draw.noStroke(env);
  if (x +. rad < 0.) {
    if (y +. rad < 0.) {
      rect(~center=(0., 0.), ~w=4., ~h=4., env)
    } else if (y -. rad > height) {
      rect(~center=(0., height), ~w=4., ~h=4., env)
    } else {
      rect(~center=(0., y), ~w=4., ~h=scale(-. x), env)
    }
  } else if (x -. rad > width) {
    if (y +. rad < 0.) {
      rect(~center=(width, 0.), ~w=4., ~h=4., env)
    } else if (y -. rad > height) {
      rect(~center=(width, height), ~w=4., ~h=4., env)
    } else {
      let w = scale(x -. width);
      rect(~center=(width, y), ~w=4., ~h=w, env)
    }
  } else if (y +. rad < 0.) {
    let h = scale(-. y);
    rect(~center=(x, 0.), ~w=h, ~h=4., env)
  } else if (y -. rad > height) {
    let h = scale(y -. height);
    rect(~center=(x, height), ~w=h, ~h=4., env)
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

let drawStatus = (me, env) => {
  let percent = flDiv(me.Player.health, fullPlayerHealth);
  Draw.strokeWeight(1, env);
  Draw.stroke(Constants.white, env);
  Draw.noFill(env);
  Draw.rect(~pos=(10, 10), ~width=100, ~height=10, env);
  Draw.fill(Constants.white, env);
  Draw.noStroke(env);
  Draw.rect(~pos=(10, 10), ~width=int_of_float(100. *. percent), ~height=10, env);
  for (i in 0 to me.Player.lives) {
    circle(~center=(float_of_int(i * 15 + 100 + 20), 15.), ~rad=5., env)
  }
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
    ~rad=me.size,
    env
  );
  Draw.noStroke(env)
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

      /* Draw.stroke(withAlpha(enemy.color, 0.6), env); */
      /* Draw.strokeWeight(2, env); */
      let sweep = Constants.two_pi /. float_of_int(full);
      Draw.stroke(enemy.color, env);
      Draw.noFill(env);
      for (i in 0 to current - 1) {
        let f = float_of_int(i);
        Draw.arcf(~center=enemy.pos,
        ~radx = max(0., rad -. 10.),
        ~rady = max(0., rad -. 10.),
        ~start = sweep *. f,
        ~stop = sweep *. f +. sweep,
        ~isOpen = false,
        ~isPie = true,
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

let drawBullet = (env, bullet) =>
  Bullet.(drawOnScreen(~color=bullet.color, ~center=bullet.pos, ~rad=bullet.size, env));

let drawExplosion = (env, explosion) => {
  open Explosion;
  let (current, total) = explosion.timer;
  let faded = 1. -. current /. total;
  Draw.fill(withAlpha(explosion.color, faded), env);
  Draw.noStroke(env);
  let size = (1.5 -. 0.5 *. faded) *. explosion.size;
  circle(~center=explosion.pos, ~rad=size, env)
};