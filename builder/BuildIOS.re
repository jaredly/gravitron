
let buildForArch = (arch, ocamlarch, sdkName) => {
  let sdk = "/Applications/Xcode.app/Contents/Developer/Platforms/" ++ sdkName ++ ".platform/Developer/SDKs/" ++ sdkName ++ ".sdk";
  let ocaml = Filename.concat(Sys.getenv("HOME"), ".opam/4.04.0+ios+" ++ ocamlarch ++ "/ios-sysroot");

  Builder.compile(Builder.{
    name: "reasongl_" ++ arch,
    shared: false,
    mainFile: "./src/ios.re",
    cOpts: "-arch " ++ arch ++ " -isysroot " ++ sdk ++ " -isystem " ++ ocaml ++ "/lib/ocaml -DCAML_NAME_SPACE -I./ios/OCamlIOS -I" ++ ocaml ++ "/lib/ocaml/caml -fno-objc-arc -miphoneos-version-min=7.0",
    mlOpts: "bigarray.cmxa -verbose",
    dependencyDirs: ["./reasongl-interface/src", "./reasongl-ios/src", "./reprocessing/src"],
    buildDir: "_build/ios_" ++ arch,
    env: "BSB_BACKEND=native-ios",

    cc: "/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/clang",
    outDir: "./ios/",
    ppx: ["'~/.opam/4.04.0+ios+amd64/bin/ocamlrun ./reasongl-ios/matchenv.ppx'"],
    ocamlDir: ocaml,
    refmt: "./reasongl-ios/refmt", /* HACK */
  });
};

buildForArch("x86_64", "amd64", "iPhoneSimulator");
buildForArch("arm64", "arm64", "iPhoneOS");

BuildUtils.readCommand(
  "lipo -create -o ios/libreasongl.a ios/libreasongl_arm64.a ios/libreasongl_x86_64.a"
) |> Builder.unwrap("unable to link together") |> ignore;

Unix.unlink("ios/libreasongl_arm64.a");
Unix.unlink("ios/libreasongl_x86_64.a");