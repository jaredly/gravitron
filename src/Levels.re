open GravShared;
open SharedTypes;

open Reprocessing;

open Enemy;

let initialSpeed = isPhone ? 1. : 2.;
let sizeFactor = isPhone ? 0.8 : 1.0;

let w = env => Env.width(env) |> float_of_int;
let h = env => Env.height(env) |> float_of_int;

let pos1 = (env) => {
  isPhone
  ? (w(env) /. 2., w(env) /. 4.)
  : (w(env) /. 4., h(env) /. 4.)
};

let pos2 = (env) => {
  isPhone
  ? (
    (w(env) /. 2., w(env) /. 4.),
    (w(env) /. 2., h(env) -. w(env) /. 4.)
  )
  : (
    (w(env) /. 4., h(env) /. 4.),
    (w(env) *. 3. /. 4., h(env) -. w(env) /. 4.)
  )
};

let pos3 = (env) => {
  isPhone
  ? (
    (w(env) /. 4., w(env) /. 4.),
    (w(env) *. 3. /. 4., w(env) /. 4.),
    (w(env) *. 3. /. 4., h(env) -. w(env) /. 4.)
  )
  : (
    (w(env) /. 4., h(env) /. 4.),
    (w(env) *. 3. /. 4., w(env) /. 4.),
    (w(env) *. 3. /. 4., h(env) *. 3. /. 4.)
  )
};

let pos4 = (env) => {
  isPhone
  ? (
    (w(env) /. 4., w(env) /. 4.),
    (w(env) /. 4., h(env) -. w(env) /. 4.),
    (w(env) *. 3. /. 4., h(env) -. w(env) /. 4.),
    (w(env) *. 3. /. 4., w(env) /. 4.)
  )
  : (
    (w(env) /. 4., h(env) /. 4.),
    (w(env) /. 4., h(env) *. 3. /. 4.),
    (w(env) *. 3. /. 4., h(env) *. 3. /. 4.),
    (w(env) *. 3. /. 4., h(env) /. 4.)
  )
};

let place1 = (env, enemy) => [{...enemy, pos: pos1(env)}];

let place2 = (env, e1, e2) => {
  let (p1, p2) = pos2(env);
  [{...e1, pos: p1}, {...e2, pos: p2}]
};

let place3 = (env, e1, e2, e3) => {
  let (p1, p2, p3) = pos3(env);
  [{...e1, pos: p1}, {...e2, pos: p2}, {...e3, pos: p3}]
};

let place4 = (env, e1, e2, e3, e4) => {
  let (p1, p2, p3, p4) = pos4(env);
  [{...e1, pos: p1}, {...e2, pos: p2}, {...e3, pos: p3}, {...e4, pos: p4}]
};

open Enemy;

let fromHex = hex => {
  let code = c => switch c {
  | '0'..'9' => Char.code(c) - 48
  | 'A'..'F' => Char.code(c) - 55
  | 'a'..'f' => Char.code(c) - 87
  | _ => invalid_arg("Hex.to_char: %d is an invalid char", Char.code(c))
  };
  let a = code(hex.[0]);
  let b = code(hex.[1]);
  a * 16 + b;
};


let hexColor = hash => {
  let r = Str.first_chars(hash, 2) |> fromHex;
  let g = Str.last_chars(Str.first_chars(hash, 4), 2) |> fromHex;
  let b = Str.last_chars(hash, 2) |> fromHex;
  Utils.color(~r, ~g, ~b, ~a=255)
};






/* THe actual levles n stuff */

let red = Enemy.basic(~start=200., ~speed=initialSpeed, ~full=300., hexColor("ff0000"));
let blue = Enemy.basic(~start=0.,  ~speed=initialSpeed, ~full=200., ~health=2, ~damage=3, Reprocessing.Constants.blue);

let stage1 = env => [|
  place1(env, red),
  place2(env, red, red |> startTimer(200.)),
  place2(env, red, blue |> startTimer(100.)),
  place2(env, blue, blue |> startTimer(150.)),
  place4(
    env,
    blue |> startTimer(0.),
    blue |> startTimer(100.),
    blue |> startTimer(150.),
    blue |> startTimer(50.)
  )
|];

let green = {
  ...Enemy.basic(~start=200., ~full=300., ~speed=initialSpeed, ~health=3, Reprocessing.Constants.green),
  shooting: TripleShot(Bullet.basic(3))
};

let yellow = {
  ...Enemy.basic(~start=250., ~full=300., ~speed=initialSpeed, ~health=5, hexColor("D1CF00")),
  shooting: OneShot(Bullet.basic(~moving=HeatSeeking(0.3, 5.), 10))
};

let wanderBlue = {...blue, movement: Wander((0., 0.))};

let stage2 = env => [|
  place1(env, green),
  place3(env, red, blue, green),
  place2(env, green, wanderBlue),
  place3(env, wanderBlue, green, wanderBlue),
  place3(env, green, wanderBlue, yellow)
|];

let orange = {
  ...Enemy.basic(~start=200., ~full=300., ~health=3, hexColor("FF724A")),
  shooting: OneShot(Bullet.basic(~stepping=TimeBomb((0., 150.)), 5))
};

let wanderYellow = {...yellow, movement: Wander((0., 0.))};

let stage3 = env => [|
  place1(env, orange),
  place2(env, orange, wanderYellow),
|];

let stages = env => [|
  stage1(env),
  stage2(env),
  stage3(env),
|] |> Array.map(Array.map(List.map(Enemy.fixMoving)));

/*

Stage 1
- normal
- 2 normal
- wandering + with more health
- wander + avoider
- heat seeking missile (boss)

Stage 2
- triple shot, a few health
- red + blue + triple shot
- triple shot + heat seeking wander
- triple + heat seeking + red
- triple bomb (boss)

Stage 3
- bomb
- heat seeking bomb + normal
- scatter shot + normal
- heat seeking bomb + scatter shot
- proximity scatter (boss)

Stage 4
- alternate normal mine w/ normal bullet
- multiple mines
- mine w/ proximity scatter + normal
- alternate mine + mine w/ proximity scatter + normal
- mine +shooter

Stage 5
- asteroid
- asteroid + triple shot
- asteroid (bomb) + triple shot (heat seeking)
- asteroid (bomb) + mine (shooter)
- asteroid (scatter)

Stage 6
- rabbit
- rabbit + rabbit + rabbit
- rabbit + triple shot
- multi-health rabbit
- avoiding rabbit

Bonus? Where I just go wild













Stage 1 - just the basics
- red (one health, one shot)
- blue (two health, faster shots)

+ red
+ red + red
+ red + blue
+ blue + blue
+ blue x 4

Stage 2 (current) -
+ triple-shot small
+ red + blue + triple-small
+ triple-big
+ scatter-shooter
+ asteroids

Stage 3 (current) -
+ red rabbit (prolly want two?)
+ red + heat seeking
+ red + time bomb



Things I have to introduce

Bullets:
- normal bullet
- heat seeking bullet
- mine bullet

- time bomb
- scatter
- proximity scatter
- shooter

Enemies:
- normal
- with more health
- wandering, avoiding

- rabbit

- asteroid
- revenge

- triple shot
- alternating shots




So, unique bullet kinds that I could do

- normal
- heat seeking
- time bomb
- scatter
- proximity scatter
- normal mine (alternated with normal bullet)
- mine + proximity scatter
- mine + shooter

Enemies
- normal
- with more health
- wandering
- avoiding
- triple shot
- alternating shots
- asteroid
- rabbit
- revenge


*/
