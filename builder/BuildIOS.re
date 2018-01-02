
let cross = Filename.concat(Sys.getenv("HOME"), ".ocaml-cross-mobile");
let xcode = BuildUtils.readCommand("xcode-select -p") |> Builder.unwrap("Failed to find xcode") |> List.hd;

if (!Builder.exists("_build")) Unix.mkdir("_build", 0o740);

let makeEnv = (arch) => {
  let ocaml = cross ++ "/ios-" ++ arch;
  let sysroot = ocaml;
  let cc = "clang -arch " ++ arch ++ " -isysroot " ++ xcode ++ "/Platforms/iPhoneOS.platform/Developer/SDKs/iPhoneOS.sdk -miphoneos-version-min=8.0";

  "OCAMLLIB=\"" ++ sysroot ++ "/lib/ocaml\"
   CAML_BYTERUN=\"" ++ sysroot ++ "/bin/ocamlrun\"
   CAML_BYTECC=\"" ++ cc ++ " -O2 -Wall\"
   CAML_NATIVECC=\"" ++ cc ++ " -O2 -Wall\"
   CAML_MKEXE=\"" ++ cc ++ " -O2\"
   CAML_ASM=\"" ++ cc ++ " -c\"";
};

let buildForArch = (~suffixed=true, arch, sdkName) => {
  let sdk = xcode ++ "/Platforms/" ++ sdkName ++ ".platform/Developer/SDKs/" ++ sdkName ++ ".sdk";

  let ocaml = cross ++ "/ios-" ++ arch;
  if (!Builder.exists(ocaml)) {
    print_endline("OCaml compiler not found for ios-" ++ arch ++ ". Please download from https://github.com/jaredly/ocaml-cross-mobile.");
    exit(1);
  };

  Builder.compile(Builder.{
    name: suffixed ? "reasongl_" ++ arch : "reasongl",
    shared: false,
    mainFile: "./src/ios.re",
    cOpts: "-arch " ++ arch ++ " -isysroot " ++ sdk ++ " -isystem " ++ ocaml ++ "/lib/ocaml -DCAML_NAME_SPACE -I./ios/Gravitron -I" ++ ocaml ++ "/lib/ocaml/caml -fno-objc-arc -miphoneos-version-min=7.0",
    mlOpts: "bigarray.cmxa -verbose",
    dependencyDirs: ["./reasongl-interface/src", "./reasongl-ios/src", "./reprocessing/src"],
    buildDir: "_build/ios_" ++ arch,
    env: makeEnv(arch) ++ " BSB_BACKEND=native-ios",

    cc: xcode ++ "/Toolchains/XcodeDefault.xctoolchain/usr/bin/clang",
    outDir: "./ios/",
    ppx: ["\"" ++ ocaml ++ "/bin/ocamlrun " ++ cross ++ "/matchenv.ppx\""],
    ocamlDir: ocaml,
    refmt: "./reasongl-ios/refmt", /* HACK */
  });
};

let arm64 = () => buildForArch(~suffixed=false, "arm64", "iPhoneOS");
let x86_64 = () => buildForArch(~suffixed=false, "x86_64", "iPhoneSimulator");

let both = () => {
  buildForArch("x86_64", "iPhoneSimulator");
  buildForArch("arm64", "iPhoneOS");

  BuildUtils.readCommand(
    "lipo -create -o ios/libreasongl.a ios/libreasongl_arm64.a ios/libreasongl_x86_64.a"
  ) |> Builder.unwrap("unable to link together") |> ignore;

  Unix.unlink("ios/libreasongl_arm64.a");
  Unix.unlink("ios/libreasongl_x86_64.a");
};

switch (Sys.argv) {
| [|_, "arm64"|] => arm64()
| [|_, "x86_64"|] => x86_64()
| [|_, "all" | "both"|] => both()

| _ => print_endline("Usage: build-android [arch]

Where arch is one of arm64, x86_64, all
")
};