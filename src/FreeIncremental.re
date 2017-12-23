open SharedTypes;

/* TODO use HSV I think */
let randomColor = () => {
  HslToRgb.hsla(~h=Random.int(255), ~s=Random.float(0.5) +. 0.5, ~l=Random.float(0.3) +. 0.4, ~a=255)
  /* Reprocessing.Utils.color(~r=Random.int(255), ~g=Random.int(255), ~b=Random.int(255), ~a=255) */
};

let choose = arr => arr[Random.int(Array.length(arr))];

let chooseWeighted = arr => {
  let total = Array.fold_left((t, (n, _)) => t + n, 0, arr);
  let final = Array.make(total, snd(arr[0]));
  Array.fold_left(
    (t, (n, m)) => {
      for (i in 0 to n - 1) {
        final[t + i] = m
      };
      t + n
    },
    0,
    arr
  ) |> ignore;
  choose(final)
};

let chooseWeightedValid = (available, arr) => {
  List.filter(
    ((_, (points, _))) => points <= available,
    Array.to_list(arr)
  ) |> Array.of_list |> chooseWeighted
};

let randomSort = arr => {
  let l = Array.length(arr);
  let arr = arr |> Array.map(m => (Random.int(l * 10), m));
  arr |> Array.sort((a, b) => fst(a) - fst(b));
  arr |> Array.map(snd)
};

/* Bullet generation */

let sizeForDamage = damage => sqrt(float_of_int(damage)) +. 3.;

open Bullet;
let basicBullet = (damage) => {
  Bullet.color: Reprocessing.Constants.white,
  damage,
  size: sizeForDamage(damage),
  warmup: (0., 40.),
  acc: MyUtils.v0,
  pos: (0., 0.),
  vel: {theta: 0., mag: Random.float(2.) +. 1.},
  stepping: Nothing,
  moving: Gravity,
};

let rec pStepping = (available, bullet) => {
  let (points, stepping) = chooseWeightedValid(available, [|
    (10, (0, Nothing)),
    (1, (4, TimeBomb((0., Random.float(100.) +. 50.)))),
    {
      let (bn, b) = randomBullet(available);
      let (p, n) = choose([|(3, 3), (4, 5), (5, 6)|]);
      (1, (p + bn, Scatter((0., Random.float(100.) +. 40.), n, b)))
    },
    {
      let (bn, b) = randomBullet(available);
      let (p, n) = choose([|(3, 3), (4, 5), (5, 6)|]);
      (1, (p + bn, ProximityScatter(Random.float(100.) +. 40., n, b)))
    },
    {
      let (bn, b) = randomBullet(max(0, available - 5));
      (1, (5 + bn, Shooter((0., Random.float(200.) +. 100.), b)))
    }
  |]);
  (points, Bullet.fixColor({...bullet, stepping}))
}

and pDamage = (available, bullet) => {
  let (points, damage) = chooseWeightedValid(available, [|
    (10, (1, 5)),
    (4, (3, 10)),
    (1, (5, 20)),
  |]);
  (points, {...bullet, damage, size: sizeForDamage(damage)})
}

and randomBullet = (available) => {
  let bullet = basicBullet(3);
  let changes = randomSort([|pDamage, pStepping|]);
  let (_, points, bullet) = Array.fold_left(
    ((stop, l, b), p) => {
      if (stop || l == available) (stop, l, b)
      else if (Random.int(2) == 0) {
        (true, l, b)
      } else {
        let (lnew, b) = p(available - l, b);
        (false, l + lnew, b)
      }
    },
    (false, 0, bullet),
    changes
  );
  (points, bullet)
};



/* Enemy generation */



open Enemy;
let pHealth = (available, enemy) => {
  switch (enemy.dying) {
  | Asteroid => (0, enemy)
  | _ =>
    let possible = min(available, 5);
    let health = Random.int(possible) + 1;
    (health, {...enemy, health: (health, health), size: 20. +. sqrt(float_of_int(health)) *. 2.})
  }
};

let pMovement = (available, enemy) => {
  let (points, movement) = if (available == 1) {
    (1, Avoider(Random.float(100.) +. 50.))
  } else {
    choose([|(1, Avoider(Random.float(100.) +. 50.)), (1, GoToPosition(enemy.pos)), (3, Wander(enemy.pos))|])
  };
  (points, {...enemy, movement})
};

let pDying = (available, enemy) => {
  /* let n = available >= 4 ? Random.int(available - 4) + 4 : available >= 2 ? 2 : 1; */
  let (rp, rn) = choose([|
    (2, 5),
    (3, 10),
    (4, 15),
    (5, 20)
  |]);
  let (bn, bullet) = randomBullet(available - rp);
  let (points, dying) = chooseWeightedValid(available, [|
    (10, (0, Normal)),
    (1, (10, Asteroid)),
    (1, (rp + bn, Revenge(rn, bullet)))
  |]);
  (points, switch (dying) {
  | Asteroid => {
    let (health, _) = enemy.health;
    let health = max(2, min(health, 4));
    {...enemy, dying, health: (health, health)}
  }
  | _ => {...enemy, dying}
  })
};

let pStepping = (available, enemy) => {
  let (points, stepping) = chooseWeightedValid(available, [|
    (10, (0, DoNothing)),
    (1, (10, Rabbit(600., (0., 600.))))
  |]);
  (points, {...enemy, stepping})
};

let pShooting = (available, enemy) => {
  let (bn, bullet) = randomBullet(available);
  let (b2, bullet2) = randomBullet(available);
  let (points, shooting) = chooseWeightedValid(available, [|
    (5, (bn, OneShot(bullet))),
    (1, (bn + 3, TripleShot(bullet))),
    (1, (max(bn, b2) + 1, Alternate(bullet, bullet2, true))),
  |]);
  (points, {...enemy, shooting})
};

let pTimer = (available, enemy) => {
  let (points, max) = chooseWeightedValid(available, [|
    (3, (0, 400.)),
    (4, (1, 300.)),
    (3, (2, 200.)),
    (2, (10, 100.)),
    (1, (15, 50.)),
  |]);
  (points, {...enemy, missileTimer: (Random.float(max), max)})
};



let basicEnemy = (color) => {
  {
    pos: (0., 0.),
    vel: MyUtils.v0,
    color,
    size: 20.,
    warmup: (0., 40.),
    health: (1, 1),
    animate: 0.,
    movement: Stationary,
    dying: Normal,
    stepping: DoNothing,
    shooting: OneShot(basicBullet(5)),
    dodges: (0., 0.),
    missileTimer: (Random.float(400.), 400.),
    selfDefense: None,
  };
};

/* let permutations = [| pHealth, pMovement, pDying, pStepping, pShooting, pTimer |]; */
let permutations = [| pTimer, pShooting, pHealth, pMovement, pDying, pStepping |];

/** Ok this is looking good.
 *
 * TODO
 * I'm frequently coming up empty with scores below the lower bound.
 * So I need to make it so that I can call these permutations again
 * and give them a second chance.
 * And so I can keep going through the loop until they get difficult enough.
 *
 * Also
 * - keep missiles on the board
 *
 * GoToPosition is broken, always goes to top right -- need to randomize that
 *
 * I want more interesting bullets as a priority
 */
let makeEnemyInRange = (lower, upper) => {
  let enemy = basicEnemy(randomColor());
  /* let permutations = randomSort(permutations); */
  Array.fold_left(
    ((l, e), p) => {
      if (l >= lower) (l, e)
      else {
        let (lnew, e) = p(upper - l, e);
        (l + lnew, e)
      }
    },
    (0, enemy),
    permutations
  );
};