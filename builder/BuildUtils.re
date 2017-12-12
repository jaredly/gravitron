
let withReSuffix = path => Filename.chop_extension(path) ++ ".re";

let copy = (source, dest) => {
  let fs = Unix.openfile(source, [Unix.O_RDONLY], 0o640);
  let fd = Unix.openfile(dest, [Unix.O_WRONLY, Unix.O_CREAT, Unix.O_TRUNC], 0o640);
  let buffer_size = 8192;
  let buffer = Bytes.create(buffer_size);
  let rec copy_loop = () => switch(Unix.read(fs, buffer, 0, buffer_size)) {
  | 0 => ()
  | r => {
    ignore(Unix.write(fd, buffer, 0, r)); copy_loop();
  }
  };
  copy_loop();
  Unix.close(fs);
  Unix.close(fd);
};

let readdir = (dir) => {
  let maybeGet = (handle) =>
    try (Some(Unix.readdir(handle))) {
    | End_of_file => None
    };
  let rec loop = (handle) =>
    switch (maybeGet(handle)) {
    | None =>
      Unix.closedir(handle);
      []
    | Some(name) => [name, ...loop(handle)]
    };
  loop(Unix.opendir(dir))
};

/**
 * Get the output of a command, in lines.
 */
let readCommand = (command) => {
  print_endline(command);
  let chan = Unix.open_process_in(command);
  try {
    let rec loop = () => {
      switch (Pervasives.input_line(chan)) {
      | exception End_of_file => []
      | line => [line, ...loop()]
      }
    };
    let lines = loop();
    switch (Unix.close_process_in(chan)) {
    | WEXITED(0) => Some(lines)
    | WEXITED(_)
    | WSIGNALED(_)
    | WSTOPPED(_) =>
      print_endline("Command ended with non-zero exit code");
      None
    }
  } {
  | End_of_file => None
  }
};
