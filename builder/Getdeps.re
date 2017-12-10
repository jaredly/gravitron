
open BuildUtils;

let getSourceNames = (mainFile) => {
  let sourceDirectory = Filename.dirname(mainFile);
  List.filter(
    (name) => Filename.check_suffix(name, ".re"),
    readdir(sourceDirectory)
  )
  |> List.map((name) => sourceDirectory ++ "/" ++ name)
};

let parseOcamldep = (lines) => {
  List.map(
    line => {
      switch (Str.split(Str.regexp(":"), line)) {
      | [target, deps] => {
        let target = withReSuffix(String.trim(target));
        let deps =
        Str.split(Str.regexp(" "), deps)
        |> List.map(String.trim)
        |> List.filter(x => String.length(x) > 0)
        |> List.map(withReSuffix)
        ;
        (target, deps)
      }
      | [target] => {
        (target |> String.trim |> withReSuffix, [])
      }
      | _ => failwith("Invalid ocamldep output: " ++ line)
      }
    },
    lines
  );
};

let oneFilesDeps = (depsList, mainFile) => {
  let touched = Hashtbl.create(List.length(depsList));
  let rec loop = (fname) => {
    Hashtbl.add(touched, fname, true);
    let deps = try (List.assoc(fname, depsList)) {
    | Not_found => failwith("Dependency not listed by ocamldep: " ++ fname)
    }
    ;
    List.iter(loop, deps);
  };
  loop(mainFile);
  List.filter(item => Hashtbl.mem(touched, fst(item)), depsList);
};

let resolveDependencyOrder = (depsList, mainFile) => {
  let mainDeps = oneFilesDeps(depsList, mainFile);
  let scores = Hashtbl.create(List.length(mainDeps));

  /** Initialize everything to zero */
  List.iter(
    ((target, deps)) => {
        Hashtbl.add(scores, target, 0);
        List.iter(name => Hashtbl.add(scores, name, 0), deps);
    },
    mainDeps
  );

  let loop = () => {
    List.fold_left(
      (updated, (target, deps)) => {
        let highestDep = List.fold_left(
          (highest, dep) => max(highest, Hashtbl.find(scores, dep)),
          0,
          deps
        );
        let current = Hashtbl.find(scores, target);
        if (current < highestDep + 1) {
          Hashtbl.add(scores, target, highestDep + 1);
          true
        } else {
          updated
        }
      },
      false,
      mainDeps
    )
  };

  /* this should settle pretty quickly */
  while (loop()) ();

  let files = List.map(fst, mainDeps);
  let sorted = List.sort((a, b) => Hashtbl.find(scores, a) - Hashtbl.find(scores, b), files);
  sorted
};

let sortSourceFilesInDependencyOrder = (sourceFiles, mainFile, ~ocamlDir, ~refmt) => {
  let cmd =
    Printf.sprintf(
      "%s %s -pp '%s --print binary' -ml-synonym .re -I %s -one-line -native %s",
      Filename.concat(ocamlDir, "bin/ocamlrun"),
      Filename.concat(ocamlDir, "bin/ocamldep"),
      refmt,
      Filename.dirname(mainFile),
      String.concat(" ", sourceFiles)
    );
  switch (readCommand(cmd)) {
  | None => None
  | Some(raw) =>
    let depsList = parseOcamldep(raw);
    let filesInOrder = resolveDependencyOrder(depsList, mainFile);
    Some(filesInOrder)
  }
};

let lastModifiedTimes = Hashtbl.create(10);

let needsRebuild = (fileNames) =>
  List.fold_left(
    ((needsRebuild, notReady), name) => {
      /* If a file hasn't been compiled that we expect to be there, we set `notReady` to true
       * As soon as bucklescript has built it, it will be ready. */
      let mtime =
        try (Some(Unix.stat(name).Unix.st_mtime)) {
        | Unix.Unix_error(Unix.ENOENT, _, _) => None
        };
      switch mtime {
      | None => (needsRebuild, true)
      | Some(st_mtime) =>
        if (Hashtbl.mem(lastModifiedTimes, name)) {
          if (st_mtime > Hashtbl.find(lastModifiedTimes, name)) {
            Hashtbl.add(lastModifiedTimes, name, st_mtime);
            (true, notReady)
          } else {
            (needsRebuild, notReady)
          }
        } else {
          Hashtbl.add(lastModifiedTimes, name, st_mtime);
          (true, notReady)
        }
      }
    },
    (false, false),
    fileNames
  );

