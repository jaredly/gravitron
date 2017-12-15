open GravShared;

open SharedTypes;

open MyUtils;

open Reprocessing;

let stepExplosions = (explosions, env) =>
  Explosion.(
    List.fold_left(
      (explosions, {timer} as explosion) => {
        let (timer, finished) = stepTimer(timer, env);
        finished ? explosions : [{...explosion, timer}, ...explosions]
      },
      [],
      explosions
    )
  );