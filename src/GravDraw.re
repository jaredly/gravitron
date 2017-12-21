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
    triangle(~tip, ~size=(8., 4. +. 12. *. alpha), ~angle=MyUtils.thetaToward((x, y), tip), env);
  };
  if (x +. rad < 0.) {
    if (y +. rad < 0.) {
      tri((0., 0.))
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
  /* DrawUtils.centerText(~font=ctx.smallFont, ~pos=(x, y), ~body="Arrow keys to move", env); */
  DrawUtils.centerText(~font=ctx.smallFont, ~pos=(x, y + 25), ~body="Avoid the missiles", env);
  DrawUtils.centerText(~font=ctx.smallFont, ~pos=(x, y + 50), ~body="Gravity is your only weapon", env);
  ()
};

let drawWalls = (env, color) => {
  Draw.noStroke(env);
  Draw.fill(color, env);
  let w = Env.width(env) |> float_of_int;
  let h = Env.height(env) |> float_of_int;
  Draw.rectf(~pos=(0., 0.), ~width=w, ~height=GravShared.wallSize, env);
  Draw.rectf(~pos=(0., 0.), ~width=GravShared.wallSize, ~height=h, env);
  Draw.rectf(~pos=(0., h -. GravShared.wallSize), ~width=w, ~height=GravShared.wallSize, env);
  Draw.rectf(~pos=(w -. GravShared.wallSize, 0.), ~width=GravShared.wallSize, ~height=h, env);
};

let string_seconds = time => time < 10 ? "0" ++ string_of_int(time) : string_of_int(time);

let timeText = time => {
  let seconds = time /. 1000. |> int_of_float;
  seconds < 60
    ? "0 : " ++ string_seconds(seconds)
    : string_of_int(seconds / 60) ++ " : " ++ string_seconds(seconds mod 60);
};

let drawStatus = (ctx, {wallType, level, me, mode}, timeElapsed, env) => {
  switch (wallType) {
  | FireWalls => drawWalls(env, fireWallColor)
  | BouncyWalls => drawWalls(env, bouncyWallColor)
  | Minimapped => ()
  };
  let margin = 20;
  let fmargin = float_of_int(margin);

  /* Pause button */
  if (Utils.rectCollide(Env.mouse(env), ((0, 0), (50, 50)))) {
    Draw.stroke(Constants.white, env);
    Draw.strokeWeight(2, env);
  } else {
    Draw.noStroke(env);
  };
  Draw.fill(withAlpha(Constants.white, 0.3), env);
  Draw.rect(
    ~pos=(margin - 5, margin - 5),
    ~width=20,
    ~height=20,
    env
  );
    Draw.noStroke(env);
  Draw.fill(withAlpha(Constants.white, 0.6), env);
  Draw.rect(
    ~pos=(margin - 1, margin - 2),
    ~width=5,
    ~height=14,
    env
  );
  Draw.rect(
    ~pos=(margin - 5 + 11, margin - 2),
    ~width=5,
    ~height=14,
    env
  );

  let pauseSize = 25;
  /* Health bar */
  let percent = flDiv(me.Player.health, fullPlayerHealth);
  Draw.strokeWeight(1, env);
  Draw.stroke(Constants.white, env);
  Draw.noFill(env);
  Draw.rect(~pos=(margin + pauseSize, margin), ~width=100, ~height=10, env);
  Draw.fill(Constants.white, env);
  Draw.noStroke(env);
  Draw.rect(~pos=(margin + pauseSize, margin), ~width=int_of_float(100. *. percent), ~height=10, env);

  /* Lives */
  for (i in 0 to me.Player.lives) {
    circle(~center=(float_of_int(i * 15 + 100 + 10 + margin + pauseSize), fmargin +. 5.), ~rad=5., env)
  };

  /* Level */
  let (stage, level) = level;
  let levelText = switch mode {
  | Campaign => "Level " ++ string_of_int(stage + 1) ++ "-" ++ string_of_int(level + 1)
  | FreePlay(Easy, _) => "Easy - " ++ string_of_int(level + 1)
  | FreePlay(Medium, _) => "Medium - " ++ string_of_int(level + 1)
  | FreePlay(Hard, _) => "Hard - " ++ string_of_int(level + 1)
  };
  DrawUtils.textRightJustified(
    ~font=ctx.smallFont,
    ~body=levelText,
    ~pos=(Env.width(env) - margin, margin - 5),
    env
  );

  DrawUtils.textRightJustified(
    ~font=ctx.smallFont,
    ~body=timeText(timeElapsed),
    ~pos=(Env.width(env) - margin, Env.height(env) - margin - 16),
    env
  );
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
      Draw.fill(withAlpha(bullet.color, 0.5), env);
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

let timerCircle = (~center, ~rad, ~timer, env) => {
  let loaded = fst(timer) /. snd(timer);
  Draw.arcf(
    ~center,
    ~radx=rad,
    ~rady=rad,
    ~start=0.,
    ~stop=Constants.two_pi *. loaded,
    ~isOpen=true,
    ~isPie=false,
    env
  );
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
    switch (enemy.dying) {
    | Asteroid(_) => {
      let animate = enemy.animate;
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

  switch (enemy.stepping) {
  | Rabbit(_, timer) => {
    Draw.noFill(env);
    Draw.stroke(enemy.color, env);
    Draw.strokeWeight(3, env);
    /* Draw.strokeWeight(2, env); */
    let (warmup, maxval) = timer;
    let rad = enemy.size *. warmup /. maxval;
    GravShared.circle(
      ~center=enemy.pos,
      ~rad,
      env
    );
    Draw.noStroke(env);

    ()
  }
  | _ => ()
  };

  if (warmup === maxval) {
    let timer = enemy.missileTimer;
    let loaded = fst(timer) /. snd(timer);
    Draw.noFill(env);
    Draw.stroke(withAlpha(Constants.white, 0.4), env);
    Draw.strokeWeight(2, env);
    timerCircle(~center=enemy.pos, ~rad=rad +. 5., ~timer, env);
    Draw.noStroke(env);

    switch (enemy.dying) {
    | Revenge(count, {Bullet.color}) => {
      let fc = float_of_int(count);
        Draw.fill(withAlpha(Constants.white, 0.3), env);
      for (i in 0 to count - 1) {
        let x = i;
        let fi = float_of_int(i);
        let size = 3.;
        let theta = fi /. fc *. Constants.two_pi;
        let off = MyUtils.vecToPos({theta, mag: enemy.size +. size});
        circle(
          ~center=posAdd(enemy.pos, off),
          ~rad=size,
          env
        );
        /* circle(~center=posAdd(center, enemy.pos), ~rad, env); */
        ()
      };

      ()
    }
    | _ => ()
    }

  }
};

let drawScatterBullet = (~loaded, ~num, ~color, ~innerColor, ~bullet, env) => {
  open Bullet;
  Draw.fill(Constants.black, env);
  circle(~center=bullet.pos, ~rad=bullet.size -. 2., env);
  Draw.noFill(env);
  Draw.stroke(color, env);
  circle(~center=bullet.pos, ~rad=bullet.size, env);
  Draw.noStroke(env);
  Draw.fill(withAlpha(innerColor, 0.8), env);
  List.iter(
    ((center, rad)) => {
      circle(~center=posAdd(center, bullet.pos), ~rad=rad -. 1., env);
    },
    getCircleParams(bullet.size, float_of_int(num), 0.)
  );
  Draw.fill(Constants.black, env);
  Draw.fill(bullet.color, env);
  circle(~center=bullet.pos, ~rad=bullet.size *. (1. -. loaded), env);
};

let drawBullet = (env, playerPos, bullet) => {
  open Bullet;
  let percent = fst(bullet.warmup) /. snd(bullet.warmup);
  let color = percent < 0.99 ? withAlpha(bullet.color, percent *. 0.8 +. 0.2) : bullet.color;
  drawOnScreen(~color=color, ~center=bullet.pos, ~rad=bullet.size, env);
  switch bullet.stepping {
  | Scatter(counter, num, {color: innerColor}) => {
    let loaded = fst(counter) /. snd(counter);
    drawScatterBullet(~loaded, ~num, ~color, ~innerColor, ~bullet, env);
  }
  | ProximityScatter(maxDist, num, {color: innerColor}) => {
    let dist = MyUtils.dist(MyUtils.posSub(bullet.pos, playerPos));
    let loaded = dist > maxDist *. 4. ? 0. : 1. -. (dist -. maxDist) /. (maxDist *. 3.);
    drawScatterBullet(~loaded, ~num, ~color, ~innerColor, ~bullet, env);
  }
  | TimeBomb(timer) =>
    Draw.noFill(env);
    Draw.stroke(withAlpha(Constants.white, 0.7), env);
    Draw.strokeWeight(3, env);
    timerCircle(~center=bullet.pos, ~rad=bullet.size +. 2., ~timer, env)
  | Shooter(timer, _) =>
    Draw.noFill(env);
    Draw.stroke(withAlpha(Constants.red, 0.7), env);
    Draw.strokeWeight(3, env);
    timerCircle(~center=bullet.pos, ~rad=bullet.size +. 2., ~timer, env)
  | _ => ()
  };

  switch bullet.moving {
    | HeatSeeking(_, _) => {
      /* Draw.fill(color, env); */
      Draw.noFill(env);
      Draw.stroke(withAlpha(color, 0.5), env);
      /* open MyUtils; */
      let tip = posAdd(bullet.pos, vecToPos({theta: bullet.vel.theta, mag: bullet.size *. 2.}));
      let tail = posAdd(bullet.pos, vecToPos({theta: bullet.vel.theta, mag: bullet.size *. -2.}));
      Draw.linef(~p1=tail, ~p2=tip, env);
    }
    | _ => ()
    };
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