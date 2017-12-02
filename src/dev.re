
let (/+) = Filename.concat;
let assetDir = Filename.dirname(Sys.argv[0]) /+ ".." /+ ".." /+ ".." /+ "assets";
Main.run(assetDir, true);
