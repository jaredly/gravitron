open SharedTypes;

let fixMoving = enemy => Enemy.{
  ...enemy,
  movement: switch enemy.movement {
  | GoToPosition(_) => GoToPosition(enemy.pos)
  | Wander(_) => Wander(enemy.pos)
  | _ => enemy.movement
  }
};

let rec enemyInRange = (lower, upper, ~pos) => {
  let (p, e) = FreeIncremental.makeEnemyInRange(lower, upper);
  if (p < lower || p > upper) enemyInRange(lower, upper, ~pos)
  else fixMoving({...e, pos})
};

let easyEnemy = enemyInRange(3, 9);
let mediumEnemy = enemyInRange(10, 14);
let hardEnemy = enemyInRange(15, 19);
let ludicrousEnemy = enemyInRange(20, 24);

/* let mediumEnemy = (~pos) => {
  let (_, e) = FreeIncremental.makeEnemyInRange(10, 20);
  fixMoving({...e, pos})
};

let hardEnemy = (~pos) => {
  let (p, e) = FreeIncremental.makeEnemyInRange(20, 30);
  let points = ref(p);
  let enemy = ref(e);
  while (points^ < 20) {
    let (p, e) = FreeIncremental.makeEnemyInRange(20, 30);
    points := p;
    enemy := e;
  };
  print_endline("Points: " ++ string_of_int(points^));
  fixMoving({...enemy^, pos})
}; */

/* let test = () => {
  for (_ in 0 to 10) {
    let (a, e) = FreeIncremental.makeEnemyInRange(3, 10);
    print_endline(string_of_int(a) ++ " :: " ++ Enemy.show(e))
  };
  print_endline("Harder ones");
  for (_ in 0 to 10) {
    let (a, e) = FreeIncremental.makeEnemyInRange(10, 20);
    print_endline(string_of_int(a) ++ " :: " ++ Enemy.show(e))
  };
  print_endline("Hardest ones");
  for (_ in 0 to 10) {
    let (a, e) = FreeIncremental.makeEnemyInRange(20, 30);
    print_endline(string_of_int(a) ++ " :: " ++ Enemy.show(e))
  };
}; */

/* test(); */