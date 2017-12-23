open SharedTypes;

let makeLevel = (env, maker) => {
  let w = Reprocessing.Env.width(env) |> float_of_int;
  let h = Reprocessing.Env.height(env) |> float_of_int;
  let q = min(w, h) /. 4.;
  let tl = (q, q);
  let tr = (w -. q, q);
  let bl = (q, h -. q);
  let br = (w -. q, h -. q);
  let positions = [|tl, tr, bl, br|];
  let level = ref([]);
  for (i in 0 to Random.int(2) + 1) {
    level := [maker(~pos=positions[i]), ...level^]
  };
  level^
};

let makeStage = (env, maker) => {
  let levels = Array.make(5, []);
  for (i in 0 to 4) {
    levels[i] = makeLevel(env, maker)
  };
  levels
};