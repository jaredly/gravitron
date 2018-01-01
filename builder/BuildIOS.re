
let makeEnv = (arch) => {
  let ocaml = "/Users/jared/clone/fork/cross-fixed/ios-" ++ arch;
  let sysroot = ocaml;
  let cc = "clang -arch " ++ arch ++ " -isysroot /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/Developer/SDKs/iPhoneOS.sdk -miphoneos-version-min=8.0";

  "OCAMLLIB=\"" ++ sysroot ++ "/lib/ocaml\"
   CAML_BYTERUN=\"" ++ sysroot ++ "/bin/ocamlrun\"
   CAML_BYTECC=\"" ++ cc ++ " -O2 -Wall\"
   CAML_NATIVECC=\"" ++ cc ++ " -O2 -Wall\"
   CAML_MKEXE=\"" ++ cc ++ " -O2\"
   CAML_ASM=\"" ++ cc ++ " -c\"";

};





let buildForArch = (arch, sdkName) => {
  let sdk = "/Applications/Xcode.app/Contents/Developer/Platforms/" ++ sdkName ++ ".platform/Developer/SDKs/" ++ sdkName ++ ".sdk";
  try (Unix.stat("_build") |> ignore) {
  | Unix.Unix_error(Unix.ENOENT, _, _) => Unix.mkdir("_build", 0o740);
  };

  /* let ocaml = Filename.concat(Sys.getenv("HOME"), ".opam/4.04.0+ios+" ++ ocamlarch ++ "/ios-sysroot"); */


  let cross = "/Users/jared/clone/fork/cross-fixed";
  let ocaml = cross ++ "/ios-" ++ arch;

  Builder.compile(Builder.{
    name: "reasongl_" ++ arch,
    shared: false,
    mainFile: "./src/ios.re",
    cOpts: "-arch " ++ arch ++ " -isysroot " ++ sdk ++ " -isystem " ++ ocaml ++ "/lib/ocaml -DCAML_NAME_SPACE -I./ios/Gravitron -I" ++ ocaml ++ "/lib/ocaml/caml -fno-objc-arc -miphoneos-version-min=7.0",
    mlOpts: "bigarray.cmxa -verbose",
    dependencyDirs: ["./reasongl-interface/src", "./reasongl-ios/src", "./reprocessing/src"],
    buildDir: "_build/ios_" ++ arch,
    env: makeEnv(arch) ++ " BSB_BACKEND=native-ios",

    cc: "/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/clang",
    outDir: "./ios/",
    ppx: ["\"" ++ ocaml ++ "/bin/ocamlrun " ++ cross ++ "/matchenv.ppx\""],
    ocamlDir: ocaml,
    refmt: "./reasongl-ios/refmt", /* HACK */
  });
};

buildForArch("x86_64", "iPhoneSimulator");
buildForArch("arm64", "iPhoneOS");

BuildUtils.readCommand(
  "lipo -create -o ios/libreasongl.a ios/libreasongl_arm64.a ios/libreasongl_x86_64.a"
) |> Builder.unwrap("unable to link together") |> ignore;

Unix.unlink("ios/libreasongl_arm64.a");
Unix.unlink("ios/libreasongl_x86_64.a");