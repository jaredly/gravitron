open SharedTypes;
open GravShared;
open Reprocessing;
open MyUtils;

let maxSpeed = isPhone ? 10. : 7.;
let stepMeMouse = ({me} as state, env) =>
  Player.(
    if (Env.mousePressed(env) && state.hasMoved) {
      let delta = deltaTime(env);
      let mousePos = floatPos(Reprocessing_Env.mouse(env));
      let mousePos = isPhone ? scalePos(mousePos, phoneScale) : mousePos;
      let vel = springToward(me.pos, mousePos, isPhone ? 0.5 : 0.1);
      let vel = clampVec(vel, 0.01, maxSpeed, 0.98);
      let (vel, pos) = bouncePos(state.wallType, vel, me.pos, Env.width(env), Env.height(env), delta, me.size);
      {...state, me: {...me, pos, vel}, hasMoved: true}
    } else {
      let delta = deltaTime(env);
      let vel = clampVec(me.vel, 0.01, maxSpeed, 0.8);
      let (vel, pos) = bouncePos(state.wallType, vel, me.pos, Env.width(env), Env.height(env), delta, me.size);
      {...state, me: {...me, pos, vel}}
      /* state */
    }
  );

let stepMeJoystick = ({me} as state, env) =>
  Player.(
    if (Env.mousePressed(env)) {
      let vel = springToward(joystickPos(env), floatPos(Reprocessing_Env.mouse(env)), 0.1);
      let vel = clampVec(vel, 1., 7., 0.98);
      let delta = deltaTime(env);
      let (vel, pos) = bouncePos(state.wallType, vel, me.pos, Env.width(env), Env.height(env), delta, me.size);
      /* let pos = posAdd(me.pos, vecToPos(scaleVec(vel, delta))); */
      {...state, me: {...me, pos, vel}, hasMoved: true}
    } else {
      state
    }
  );

let arrowAccs = {
  let speed = 0.9;
  [
    (Events.Left, vecFromPos((-. speed, 0.))),
    (Events.Up, vecFromPos((0., -. speed))),
    (Events.Down, vecFromPos((0., speed))),
    (Events.Right, vecFromPos((speed, 0.)))
  ]
};

let stepMeKeys = ({me} as state, env) => {
  open Player;
  let vel =
    List.fold_left(
      (acc, (key, acc')) => Env.key(key, env) ? vecAdd(acc, acc') : acc,
      me.vel,
      arrowAccs
    );
  let vel = clampVec(vel, 0.01, 7., 0.90);
  let delta = Env.deltaTime(env) *. 1000. /. 16.;
  let (vel, pos) = bouncePos(state.wallType, vel, me.pos, Env.width(env), Env.height(env), delta, me.size);
  {...state, me: {...me, pos, vel},
    hasMoved: state.hasMoved || vel.mag > 0.01
  }
};
