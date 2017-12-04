open Reprocessing;

open MyUtils;

open SharedTypes;

open GravShared;

let newGame = (~wallType, env) => {
  let levels = isPhone ? GravLevels.makePhoneLevels(env) : GravLevels.levels;
  {
    status: Running,
    hasMoved: true,
    level: 0,
    levels,
    me: {
      health: fullPlayerHealth,
      lives: 1,
      pos: getPhonePos(env),
      color: Constants.green,
      vel: v0,
      acc: v0,
      size: 15.
    },
    enemies: levels[0],
    bullets: [],
    explosions: [],
    wallType,
  }
};

let initialState = newGame;

let drawState = (ctx, state, env) => {
  Draw.background(Constants.black, env);
  /* if (true || isPhone) {
    Draw.pushMatrix(env);
    Draw.scale(~x=1. /. phoneScale, ~y=1. /. phoneScale, env)
  }; */
  open GravDraw;
  if (state.status === Running || state.status === Paused) {
    drawMe(state.me, env)
  };
  List.iter(drawEnemy(env), state.enemies);
  List.iter(drawBullet(env), state.bullets);
  List.iter(drawExplosion(env), state.explosions);

  if (state.wallType === Minimapped) {
    drawMinimap(state.bullets, env);
  };
  /* if (true || isPhone) {
    Draw.popMatrix(env)
  }; */
  drawStatus(ctx, state.level, state.me, env);
  if (!state.hasMoved) {
    drawHelp(ctx, state.me, env);
  }
};

let mainLoop = (ctx, state, env) => {
  open ScreenManager.Screen;
  switch state.status {
  | Dead(0) =>
      {
        ...state,
        status: Running,
        me: {...state.me, Player.health: fullPlayerHealth, lives: state.me.Player.lives - 1},
        enemies: state.levels[state.level],
        explosions: [],
        bullets: []
      }
  | _ =>
    let state = {
      ...state,
      status:
        switch state.status {
        | Dead(n) => Dead(n - 1)
        | t => t
        }
    };
    open GravStep;
    let state =
      state.status === Running ?
        isPhone ? stepMeMouse(state, env) : stepMeKeys(state, env) : state;
    let state = stepEnemies(state, env);
    let state = {...state, explosions: stepExplosions(state.explosions, env)};
    let state = stepBullets(state, env);
    drawState(ctx, state, env);
    state.enemies !== [] || state.status !== Running ?
      state : newGame(~wallType=currentWallType(ctx), env);
  }
};

let newAtLevel = (wallType, env, level) => {
  let state = newGame(~wallType, env);
  if (level >= Array.length(state.levels)) {
    state
  } else {
    {...state, status: Running, level, enemies: state.levels[level]}
  }
};