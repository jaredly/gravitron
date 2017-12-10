open Reprocessing;

let jumpForce = (-260.);

let speed = 175.;

let pipeWidth = 50.;

let halfGap = 70.;

let birdSize = 20.;

let gravity = 800.;

let birdX = 50.;

let defaultBirdY = 50.;

let pipeHeight = 350.;

let floorY = 500.;

type runningT =
  | Running
  | Dead
  | Restart;

type stateT = {
  birdY: float,
  birdVY: float,
  pipes: list((float, float)),
  xOffset: float,
  running: runningT,
  image: imageT,
  logo: imageT,
  font: fontT,
  score: int
};

let setup = (env) => {
  Env.size(~width=400, ~height=640, env);
  {
    birdY: defaultBirdY,
    birdVY: 0.,
    pipes: [(200., 100.), (400., 100.), (600., 100.), (800., 100.)],
    xOffset: 0.,
    running: Running,
    image: Draw.loadImage(~filename="flappy.png", ~isPixel=true, env),
    logo: Draw.loadImage(~filename="reason-logo.png", env),
    font: Draw.loadFont(~filename="flappy.fnt", ~isPixel=true, env),
    score: 0
  }
};

let generatePipe = (x) => (
  x +. Utils.randomf(~min=200., ~max=300.),
  Utils.randomf(~min=50. +. halfGap, ~max=floorY -. 50. -. halfGap)
);

let generateNewPipes = ({pipes, xOffset}) =>
  List.map(
    ((x, _) as pipe) =>
      if (x -. xOffset +. pipeWidth <= 0.) {
        let newX = List.fold_left((maxX, (x, _)) => max(maxX, x), 0., pipes);
        generatePipe(newX)
      } else {
        pipe
      },
    pipes
  );

let drawBird = (state, env) => {
  Draw.pushMatrix(env);
  Draw.translate(~x=birdX, ~y=state.birdY -. 2., env);
  let low1 = (-200.);
  Draw.rotate(
    Utils.remapf(~value=state.birdVY, ~low1, ~high1=1200., ~low2=(-0.5), ~high2=1.5),
    env
  );
  Draw.translate(~x=birdSize *. (-1.), ~y=birdSize *. (-1.), env);
  switch (int_of_float(state.xOffset /. 20.) mod 3) {
  | 0 =>
    Draw.subImage(
      state.image,
      ~pos=(0, 0),
      ~width=int_of_float(birdSize) * 2 + 4,
      ~height=int_of_float(birdSize) * 2 + 4,
      ~texPos=(115, 378),
      ~texWidth=17,
      ~texHeight=17,
      env
    )
  | 1 =>
    Draw.subImage(
      state.image,
      ~pos=(0, 0),
      ~width=int_of_float(birdSize) * 2 + 4,
      ~height=int_of_float(birdSize) * 2 + 4,
      ~texPos=(115, 404),
      ~texWidth=17,
      ~texHeight=17,
      env
    )
  | 2 =>
    Draw.subImage(
      state.image,
      ~pos=(0, 0),
      ~width=int_of_float(birdSize) * 2 + 4,
      ~height=int_of_float(birdSize) * 2 + 4,
      ~texPos=(115, 430),
      ~texWidth=17,
      ~texHeight=17,
      env
    )
  | _ => assert false
  };
  Draw.popMatrix(env)
};

let drawPipes = ({xOffset, pipes, image}, env) =>
  List.iter(
    ((x, y)) => {
      let height = - int_of_float(pipeHeight);
      Draw.subImage(
        image,
        ~pos=(int_of_float(x -. xOffset), int_of_float(y -. halfGap)),
        ~width=int_of_float(pipeWidth),
        ~height,
        ~texPos=(0, 323),
        ~texWidth=26,
        ~texHeight=160,
        env
      );
      Draw.subImage(
        image,
        ~pos=(int_of_float(x -. xOffset), int_of_float(y +. halfGap)),
        ~width=int_of_float(pipeWidth),
        ~height=int_of_float(pipeHeight),
        ~texPos=(0, 323),
        ~texWidth=26,
        ~texHeight=160,
        env
      )
    },
    pipes
  );

let drawTiledThing = ({image}, ~texPos, ~texWidth, ~texHeight, ~xOffset, ~y, ~height, env) => {
  let width = Env.width(env);
  Draw.subImage(
    image,
    ~pos=(int_of_float(-. xOffset) mod width, int_of_float(y)),
    ~width,
    ~height,
    ~texPos,
    ~texWidth,
    ~texHeight,
    env
  );
  Draw.subImage(
    image,
    ~pos=(int_of_float(-. xOffset) mod width + width, int_of_float(y)),
    ~width,
    ~height,
    ~texPos,
    ~texWidth,
    ~texHeight,
    env
  )
};

let draw = ({font, score, image, birdY, birdVY, pipes, xOffset, running} as state, env) => {
  let userInput =
    switch Reasongl.Gl.target {
    | "native-ios" => Env.mousePressed(env)
    | "native-android" => Env.mousePressed(env)
    | _ => Env.keyPressed(Space, env)
    };
  drawTiledThing(
    state,
    ~texPos=(146, 0),
    ~texWidth=144,
    ~texHeight=256,
    ~xOffset=xOffset /. 2.,
    ~y=0.,
    ~height=Env.height(env),
    env
  );
  drawPipes(state, env);
  drawTiledThing(
    state,
    ~texPos=(292, 0),
    ~texWidth=168,
    ~texHeight=56,
    ~xOffset,
    ~y=floorY,
    ~height=Env.height(env) - int_of_float(floorY),
    env
  );
  Draw.image(state.logo, ~pos=(10, Env.height(env) - 50), ~width=40, ~height=40, env);
  drawBird(state, env);
  Draw.pushMatrix(env);
  Draw.translate(~x=170., ~y=90., env);
  Draw.scale(~x=3., ~y=3., env);
  Draw.text(~font, ~body=string_of_int(score), ~pos=(0, 0), env);
  Draw.popMatrix(env);
  if (running != Running) {
    Draw.subImage(
      image,
      ~pos=(60, 200),
      ~width=291,
      ~height=63,
      ~texPos=(395, 59),
      ~texWidth=97,
      ~texHeight=21,
      env
    )
  };
  let collided =
    List.exists(
      ((x, y)) =>
        Utils.intersectRectCircle(
          ~rectPos=(x -. xOffset, 0.),
          ~rectW=pipeWidth,
          ~rectH=y -. halfGap,
          ~circlePos=(birdX, birdY),
          ~circleRad=birdSize
        )
        || Utils.intersectRectCircle(
             ~rectPos=(x -. xOffset, y +. halfGap),
             ~rectW=pipeWidth,
             ~rectH=float_of_int(Env.height(env)),
             ~circlePos=(birdX, birdY),
             ~circleRad=birdSize
           ),
      pipes
    );
  let pipes = generateNewPipes(state);
  let hitFloor = birdY >= floorY -. birdSize;
  let deltaTime = Env.deltaTime(env);
  switch running {
  | Running => {
      ...state,
      pipes,
      birdY: max(min(birdY +. birdVY *. deltaTime, floorY -. birdSize), birdSize),
      birdVY: userInput || collided ? jumpForce : birdVY +. gravity *. deltaTime,
      xOffset: xOffset +. speed *. deltaTime,
      running: collided || hitFloor ? Dead : Running,
      score:
        List.exists(
          ((x, _)) => birdX +. xOffset <= x && birdX +. xOffset +. speed *. deltaTime > x,
          pipes
        ) ?
          score + 1 : score
    }
  | Dead => {
      ...state,
      pipes,
      birdY: max(min(birdY +. birdVY *. deltaTime, floorY -. birdSize), birdSize),
      birdVY: birdVY +. gravity *. deltaTime,
      running: hitFloor ? Restart : Dead
    }
  | Restart =>
    if (userInput) {
      {
        ...state,
        pipes: [generatePipe(200.), generatePipe(400.), generatePipe(600.), generatePipe(800.)],
        birdY: defaultBirdY,
        birdVY: 0.,
        xOffset: 0.,
        running: Running,
        score: 0
      }
    } else {
      state
    }
  }
};

run(~setup, ~draw, ());