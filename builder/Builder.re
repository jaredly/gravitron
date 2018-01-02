
let isNewer = (src, dest) => {
  let stat = try (Some(Unix.stat(dest))) {
  | Unix.Unix_error(Unix.ENOENT, _, _) => None
  };
  switch stat {
  | None => true
  | Some(stat) => {
    let ss = Unix.stat(src);
    ss.Unix.st_mtime > stat.Unix.st_mtime
  }
  }
};

let copyIfNewer = (src, dest) => {
  if (isNewer(src, dest)) {
    BuildUtils.copy(src, dest)
  }
};

let copyDirContents = (source, dest) => {
  let contents = BuildUtils.readdir(source)
  |> List.filter(x => x != "." && x != "..")
  |> List.filter(name => {
      let src = Filename.concat(source, name);
      let stat = Unix.stat(src);
      stat.Unix.st_kind === Unix.S_REG
  });
  List.map(
    name => {
      /* print_endline(name); */
      copyIfNewer(
        Filename.concat(source, name),
        Filename.concat(dest, name)
      );
      Filename.concat(dest, name)
    },
    contents
  )
};

let unwrap = (message, opt) => switch opt { | None => failwith(message) | Some(x) => x};

type config = {
  name: string,
  env: string,
  mainFile: string,
  cOpts: string,
  mlOpts: string,
  dependencyDirs: list(string),
  shared: bool,
  outDir: string,
  buildDir: string,
  ocamlDir: string,
  cc: string,
  refmt: string,
  ppx: list(string),
};

let isSourceFile = x => Filename.check_suffix(x, ".re") || Filename.check_suffix(x, ".ml");

let copyAndSort = ({mainFile, dependencyDirs, buildDir, ocamlDir, refmt}) => {
  try (Unix.stat(buildDir) |> ignore) {
  | Unix.Unix_error(Unix.ENOENT, _, _) => Unix.mkdir(buildDir, 0o740);
  };
  let allNames = List.map(dirname => copyDirContents(dirname, buildDir), [Filename.dirname(mainFile), ...dependencyDirs]) |> List.concat;
  let mainFileName = Filename.concat(buildDir, Filename.basename(mainFile));
  let reasonOrOcamlFiles = List.filter(isSourceFile, allNames);
  let filesInOrder = unwrap("Failed to run ocamldep", Getdeps.sortSourceFilesInDependencyOrder(~ocamlDir, ~refmt, reasonOrOcamlFiles, mainFileName));
  /* print_endline(String.concat(" -- ", filesInOrder)); */
  (allNames, filesInOrder)
};

let ocamlopt = config => {
  let ppxFlags = String.concat(" ", List.map(name => "-ppx " ++ name, config.ppx));
  Printf.sprintf(
    "%s %s %s %s %s %s -I %s -w -40 -pp '%s --print binary' -verbose",
    config.env,
    Filename.concat(config.ocamlDir, "bin/ocamlrun"),
    Filename.concat(config.ocamlDir, "bin/ocamlopt"),
    ppxFlags,
    Str.split(Str.regexp(" "), config.cOpts) |> List.map(x => "-ccopt " ++ x) |> String.concat(" "),
    config.mlOpts,
    Filename.concat(config.ocamlDir, "lib/ocaml"),
    config.refmt
  )
};

let exists = path => try {Unix.stat(path) |> ignore; true} {
| Unix.Unix_error(Unix.ENOENT, _, _) => false
};

let compileMl = (config, force, sourcePath) => {
  let cmx = Filename.chop_extension(sourcePath) ++ ".cmx";
  if (force || isNewer(sourcePath, cmx)) {
    BuildUtils.readCommand(Printf.sprintf(
      "%s -c -S -I %s -o %s -impl %s",
      ocamlopt(config),
      Filename.dirname(sourcePath),
      cmx,
      sourcePath
    )) |> unwrap(
      "Failed to build " ++ sourcePath
    ) |> ignore;
    (true, cmx)
  } else {
    (false, cmx)
  }
};

let compileC = (config, force, sourcePath) => {
  let dest = Filename.chop_extension(sourcePath) ++ ".o";
  if (force || isNewer(sourcePath, dest)) {
    /* let out = Filename.basename(dest); */
    BuildUtils.readCommand(Printf.sprintf(
      "%s %s -I %s -c -std=c11 %s -o %s",
      config.cc,
      config.cOpts,
      /* ocamlopt(config), */
      Filename.dirname(sourcePath),
      sourcePath,
      dest
    )) |> unwrap(
      "Failed to build " ++ sourcePath
    ) |> ignore;
    /* BuildUtils.copy(out, dest); */
    /* Unix.unlink(out); */
    (true, dest)
  } else {
    (false, dest)
  };
};

let compileShared = (config, cmxs, os) => {
  let dest = Filename.concat(config.outDir, "lib" ++ config.name ++ ".so");
  let sourceFiles = [
    Filename.concat(config.ocamlDir, "lib/ocaml/libasmrun.a"),
    "bigarray.cmxa",
    ...List.append(cmxs, os)
  ];
  BuildUtils.readCommand(Printf.sprintf(
    "%s -I %s -output-obj %s -o %s",
    ocamlopt(config),
    config.buildDir,
    String.concat(" ", sourceFiles),
    dest
  )) |> unwrap(
    "Failed to build " ++ dest
  ) |> ignore;
};

let compileStatic = (config, cmxs, os) => {
  let ofile = Filename.concat(config.buildDir, "libcustom" ++ ".o");
  let dest = Filename.concat(config.outDir, "lib" ++ config.name ++ ".a");
  let sourceFiles = [
    Filename.concat(config.ocamlDir, "lib/ocaml/libasmrun.a"),
    /* "bigarray.cmx", */
    ...List.append(cmxs, os)
  ];
  BuildUtils.readCommand(Printf.sprintf(
    "%s -I %s -I %s -ccopt -lasmrun -cclib -static  -output-obj %s -o %s",
    ocamlopt(config),
    config.buildDir,
    config.ocamlDir,
    String.concat(" ", sourceFiles),
    ofile
  )) |> unwrap(
    "Failed to build " ++ dest
  ) |> ignore;
  BuildUtils.copy(
    Filename.concat(config.ocamlDir, "lib/ocaml/libasmrun.a"),
    dest
  );
  BuildUtils.readCommand(Printf.sprintf(
    "ar -r %s %s %s",
    dest,
    String.concat(" ", os),
    ofile
  )) |> unwrap("failed to link") |> ignore;
};

let mapNewer = (fn, files) => {
  List.fold_left(
    ((force, results), name) => {
      let (changed, result) = fn(force, name);
      (changed || force, results @ [result])
    },
    (false, []),
    files
  ) |> snd
};

let compile = config => {
  print_endline("Building");
  BuildUtils.readCommand(ocamlopt(config) ++ " -config") |> unwrap(
    "Failed to run 'config'"
  ) |>  String.concat("\n") |> print_endline;
  let (allNames, filesInOrder) = copyAndSort(config);
  /** Build .cmx's */
  let cmxs = mapNewer(compileMl(config), filesInOrder);
  /** Build .o's */
  let os = mapNewer(compileC(config),
    List.filter(name => Filename.check_suffix(name, ".c") || Filename.check_suffix(name, ".m"), allNames));
  /** Build them together */
  config.shared ? compileShared(config, cmxs, os) : compileStatic(config, cmxs, os);
  print_endline("Built!");
};