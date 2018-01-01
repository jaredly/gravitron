
let makeEnv = (arch, abi, ndk1, full) => {
  let ocaml = "/Users/jared/clone/fork/cross-fixed/android-" ++ arch;
  let ndk = "/Users/jared/clone/fork/cross-fixed/android-ndk";
  let sysroot = ocaml;
  let darwin_ndk = ndk ++ "/toolchains/" ++ ndk1 ++ "-4.9/prebuilt/darwin-x86_64";
  let cc = darwin_ndk ++ "/bin/" ++ full ++ "-gcc  --sysroot " ++ ndk ++ "/platforms/android-24/arch-" ++ arch ++ " -I" ++ ndk ++ "/include -L" ++ ndk ++ "/lib -I" ++ ndk ++ "/sources/cxx-stl/gnu-libstdc++/4.9/include -I" ++ ndk ++ "/sources/cxx-stl/gnu-libstdc++/4.9/libs/" ++ abi ++ "/include -L" ++ ndk ++ "/sources/cxx-stl/gnu-libstdc++/4.9/libs/" ++ abi ++ " -I" ++ sysroot ++ "/include -L" ++ sysroot ++ "/lib";

  "OCAMLLIB=\"" ++ sysroot ++ "/lib/ocaml\" CAML_BYTERUN=\"" ++ sysroot ++ "/bin/ocamlrun\" CAML_BYTECC=\"" ++ cc ++ " -O2 -fno-defer-pop -Wall-D_FILE_OFFSET_BITS=64 -D_REENTRANT -fPIC\" CAML_NATIVECC=\"" ++ cc ++ " -O2 -Wall -D_FILE_OFFSET_BITS=64 -D_REENTRANT\" CAML_MKDLL=\"" ++ cc ++ " -O2 -shared\" CAML_MKMAINDLL=\"" ++ cc ++ " -O2 -shared\" CAML_MKEXE=\"" ++ cc ++ " -O2\" CAML_PACKLD=\"" ++ darwin_ndk ++ "/bin/" ++ full ++ "-ld --sysroot " ++ ndk ++ "/platforms/android-24/arch-" ++ arch ++ " -L" ++ ndk ++ "/lib -L" ++ ndk ++ "/sources/cxx-stl/gnu-libstdc++/4.9/libs/" ++ abi ++ " -L" ++ sysroot ++ "/lib -r  -o\" CAML_RANLIB=" ++ darwin_ndk ++ "/bin/" ++ full ++ "-ranlib CAML_ASM=" ++ darwin_ndk ++ "/bin/" ++ full ++ "-as";
};




let buildForArch = (arch, ocamlarch, ndkarch, cxxarch, gccarch, gccarch2) => {
  let ocaml = Filename.concat(Sys.getenv("HOME"), ".opam/4.04.0+android+" ++ ocamlarch);
  try (Unix.stat("_build") |> ignore) {
  | Unix.Unix_error(Unix.ENOENT, _, _) => Unix.mkdir("_build", 0o740);
  };

  let cross = "/Users/jared/clone/fork/cross-fixed";
  let ocaml = cross ++ "/android-" ++ ocamlarch;
  let ndk = cross ++ "/android-ndk";
  let env = makeEnv(ocamlarch, cxxarch, gccarch, gccarch2);

  Builder.compile(Builder.{
    name: "reasongl",
    shared: true,
    mainFile: "./src/android.re",
    cOpts: "-fno-omit-frame-pointer -O3 -fPIC -llog -landroid -lGLESv3 -lEGL --sysroot "
      ++ ndk ++ "/platforms/android-24/arch-" ++ ndkarch
      ++ " -I" ++ ndk ++ "/include -L"
      ++ ndk ++ "/lib -I"
      ++ ndk ++ "/sources/cxx-stl/gnu-libstdc++/4.9/include -I"
      ++ ndk ++ "/sources/cxx-stl/gnu-libstdc++/4.9/libs/" ++ cxxarch ++ "/include -L"
      ++ ndk ++ "/sources/cxx-stl/gnu-libstdc++/4.9/libs/" ++ cxxarch
      ++ " -I" ++ ocaml ++ "/include"
      ++ " -I" ++ ocaml ++ "/lib/ocaml -L"
      ++ ocaml ++ "/lib",
    mlOpts: "-runtime-variant _pic -g",
    dependencyDirs: ["./reasongl-interface/src", "./reasongl-android/src", "./reprocessing/src"],
    buildDir: "_build/android_" ++ arch,
    env: env ++ " BSB_BACKEND=native-android",

    cc: ndk ++ "/toolchains/" ++ gccarch ++ "-4.9/prebuilt/darwin-x86_64/bin/" ++ gccarch2 ++ "-gcc",
    outDir: "./android/app/src/main/jniLibs/" ++ arch ++ "/",
    ppx: ["\"" ++ ocaml ++ "/bin/ocamlrun " ++ cross ++ "/matchenv.ppx\""],
    ocamlDir: ocaml,
    refmt: cross ++ "/refmt", /* HACK */
    /* ppx: ["node_modules/matchenv/lib/bs/native/index.native"], */
    /* ocamlDir: "./node_modules/bs-platform/vendor/ocaml", */
    /* refmt: "./node_modules/bs-platform/bin/refmt3.exe" */
  });

};

/**
 * Well my good folks, if we wanted the android compiler to be relocatable, we have two options:
 * - patch `config.mlp` so that it checks some ENV vbl for `native_c_compiler`, `native_pack_linker`, `asm` and friends https://github.com/ocaml/ocaml/blob/fd7df86e6906b639cbd1c031bd0ef5884473aeb8/utils/config.mlp
 * - patch opam-cross-android so that it hardcodes the NDK paths to someplace normal, like ~/Library/Android/ndk-10e` or something
 */
/* DOES NOT WORK buildForArch("aarch64", "arm64", "arm64", "arm64-v8a", "aarch64-linux-android", "aarch64-linux-android"); */

buildForArch("armeabi-v7a", "armv7", "arm", "armabi", "arm-linux-androideabi", "arm-linux-androideabi");
/* buildForArch("x86", "x86", "x86", "x86", "x86", "i686-linux-android"); */