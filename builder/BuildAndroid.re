
let buildForArch = (arch, ocamlarch, ndkarch, cxxarch, gccarch, gccarch2) => {
  /* let arch = "x86_64"; */
  /* let sdk = "/Applications/Xcode.app/Contents/Developer/Platforms/" ++ sdkName ++ ".platform/Developer/SDKs/" ++ sdkName ++ ".sdk"; */
  let ocaml = Filename.concat(Sys.getenv("HOME"), ".opam/4.04.0+android+" ++ ocamlarch);
  /* let ocaml = "./reasongl-ios/bin/4.04.0+ios+" ++ ocamlarch; */

  Builder.compile(Builder.{
    name: "reasongl",
    shared: true,
    mainFile: "./src/android.re",
    cOpts: "-fno-omit-frame-pointer -O3 -fPIC -llog -landroid -lGLESv3 -lEGL --sysroot "
      ++ ocaml ++ "/android-ndk/platforms/android-24/arch-" ++ ndkarch
      ++ " -I" ++ ocaml ++ "/android-ndk/include -L"
      ++ ocaml ++ "/android-ndk/lib -I"
      ++ ocaml ++ "/android-ndk/sources/cxx-stl/gnu-libstdc++/4.9/include -I"
      ++ ocaml ++ "/android-ndk/sources/cxx-stl/gnu-libstdc++/4.9/libs/" ++ cxxarch ++ "/include -L"
      ++ ocaml ++ "/android-ndk/sources/cxx-stl/gnu-libstdc++/4.9/libs/" ++ cxxarch
      ++ " -I" ++ ocaml ++ "/android-sysroot/include"
      ++ " -I" ++ ocaml ++ "/android-sysroot/lib/ocaml -L"
      ++ ocaml ++ "/android-sysroot/lib",
    /* cOpts: "-arch " ++ arch ++ " -isysroot " ++ sdk ++ " -isystem " ++ ocaml ++ "/lib/ocaml -DCAML_NAME_SPACE -I./ios/OCamlIOS -I" ++ ocaml ++ "/lib/ocaml/caml -fno-objc-arc -miphoneos-version-min=7.0", */
    mlOpts: "-runtime-variant _pic -g",
    dependencyDirs: ["./reasongl-interface/src", "./reasongl-android/src", "./reprocessing/src"],
    buildDir: "_build/android_" ++ arch,
    env: "BSB_BACKEND=native-android",

    cc: ocaml ++ "/android-ndk/toolchains/" ++ gccarch ++ "-4.9/prebuilt/darwin-x86_64/bin/" ++ gccarch2 ++ "-gcc",
    outDir: "./android/app/src/main/jniLibs/" ++ arch ++ "/",
    ppx: ["./reasongl-android/matchenv.ppx"],
    ocamlDir: ocaml ++ "/android-sysroot",
    refmt: "./reasongl-ios/refmt", /* HACK */
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

buildForArch("armeabi-v7a", "armv7", "arm", "armabi", "arm-linux-androideabi", "arm-linux-androideabi");
buildForArch("x86", "x86", "x86", "x86", "x86", "i686-linux-android");