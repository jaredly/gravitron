  type pos = (float, float);

let flDiv = (a, b) => float_of_int(a) /. float_of_int(b);
  type vec = {
    mag: float,
    theta: float
  };
  /** current, max */
  type counter = (float, float);
  type counteri = (int, int);
  let counter = (num) => (0., num);
  let v0 = {mag: 0., theta: 0.};
  let dx = ({theta, mag}) => cos(theta) *. mag;
  let dy = ({theta, mag}) => sin(theta) *. mag;
  let vecToPos = (vec) => (dx(vec), dy(vec));
  let vecFromPos = ((dx, dy)) => {mag: sqrt(dx *. dx +. dy *. dy), theta: atan2(dy, dx)};
  let dist = ((dx, dy)) => sqrt(dx *. dx +. dy *. dy);
  let thetaToward = ((x0, y0), (x1, y1)) => atan2(y1 -. y0, x1 -. x0);
  let posAdd = ((x0, y0), (x1, y1)) => (x0 +. x1, y0 +. y1);
  let posSub = ((x0, y0), (x1, y1)) => (x0 -. x1, y0 -. y1);
  let vecAdd = (v1, v2) => vecFromPos(posAdd(vecToPos(v1), vecToPos(v2)));
  let vecToward = (p1, p2) => vecFromPos(posSub(p2, p1));
  let scaleVec = ({mag, theta}, scale) => {mag: mag *. scale, theta};
  let scalePos = ((x, y), scale) => (x *. scale, y *. scale);
  let withAlpha = ({Reprocessing_Common.r, g, b, a}, alpha) => {
    Reprocessing_Common.r,
    g,
    b,
    a: a *. alpha
  };
let collides = (p1, p2, d) => dist(posSub(p1, p2)) <= d;

let stepTimer = ((current, max), env) => {
  let time = Reprocessing_Env.deltaTime(env) *. 1000. /. 16.;
  if (current +. time >= max) {
    ((max, max), true)
  } else {
    ((current +. time, max), false)
  }
};

let isFullTimer = ((current, max)) => current === max;

let loopTimer = ((current, max), env) => {
  let time = Reprocessing_Env.deltaTime(env) *. 1000. /. 16.;
  if (current +. time >= max) {
    ((0., max), true)
  } else {
    ((current +. time, max), false)
  }
};

let countDown = ((current, max)) =>
  if (current <= 1) {
    ((0, max), true)
  } else {
    ((current - 1, max), false)
  };
