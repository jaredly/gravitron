
let cross = Filename.concat(Sys.getenv("HOME"), ".ocaml-cross-mobile");

let ndk = try (Sys.getenv("ANDROID_NDK")) {
| Not_found => cross ++ "/android-ndk"
};

let makeEnv = (arch, abi, ndk1, full) => {
  let ocaml = cross ++ "/android-" ++ arch;
  let sysroot = ocaml;
  let darwin_ndk = ndk ++ "/toolchains/" ++ ndk1 ++ "-4.9/prebuilt/darwin-x86_64";
  let cc = darwin_ndk ++ "/bin/" ++ full ++ "-gcc  --sysroot " ++ ndk ++ "/platforms/android-24/arch-" ++ arch ++ " -I" ++ ndk ++ "/include -L" ++ ndk ++ "/lib -I" ++ ndk ++ "/sources/cxx-stl/gnu-libstdc++/4.9/include -I" ++ ndk ++ "/sources/cxx-stl/gnu-libstdc++/4.9/libs/" ++ abi ++ "/include -L" ++ ndk ++ "/sources/cxx-stl/gnu-libstdc++/4.9/libs/" ++ abi ++ " -I" ++ sysroot ++ "/include -L" ++ sysroot ++ "/lib";

  "OCAMLLIB=\"" ++ sysroot ++ "/lib/ocaml\" CAML_BYTERUN=\"" ++ sysroot ++ "/bin/ocamlrun\" CAML_BYTECC=\"" ++ cc ++ " -O2 -fno-defer-pop -Wall-D_FILE_OFFSET_BITS=64 -D_REENTRANT -fPIC\" CAML_NATIVECC=\"" ++ cc ++ " -O2 -Wall -D_FILE_OFFSET_BITS=64 -D_REENTRANT -fPIC\" CAML_MKDLL=\"" ++ cc ++ " -O2 -shared\" CAML_MKMAINDLL=\"" ++ cc ++ " -O2 -shared\" CAML_MKEXE=\"" ++ cc ++ " -O2\" CAML_PACKLD=\"" ++ darwin_ndk ++ "/bin/" ++ full ++ "-ld --sysroot " ++ ndk ++ "/platforms/android-24/arch-" ++ arch ++ " -L" ++ ndk ++ "/lib -L" ++ ndk ++ "/sources/cxx-stl/gnu-libstdc++/4.9/libs/" ++ abi ++ " -L" ++ sysroot ++ "/lib -r  -o\" CAML_RANLIB=" ++ darwin_ndk ++ "/bin/" ++ full ++ "-ranlib CAML_ASM=" ++ darwin_ndk ++ "/bin/" ++ full ++ "-as";
};

let buildForArch = (arch, ocamlarch, ndkarch, cxxarch, gccarch, gccarch2) => {
  let ocaml = Filename.concat(Sys.getenv("HOME"), ".opam/4.04.0+android+" ++ ocamlarch);
  if (!Builder.exists("_build")) Unix.mkdir("_build", 0o740);

  let ocaml = cross ++ "/android-" ++ ocamlarch;
  let env = makeEnv(ocamlarch, cxxarch, gccarch, gccarch2);
  if (!Builder.exists(ocaml)) {
    print_endline("OCaml compiler not found for android-" ++ ocamlarch ++ ". Please download from https://github.com/jaredly/ocaml-cross-mobile.");
    exit(1);
  };
  if (!Builder.exists(ndk)) {
    print_endline("NDK not found. (looked in " ++ ndk ++ ". Please download 11c from https://developer.android.com/ndk/downloads/older_releases.html or specify its location with the ANDROID_NDK env variable.");
    exit(1);
  };

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
    refmt: cross ++ "/refmt",
  });

};

let armv7 = () => buildForArch("armeabi-v7a", "armv7", "arm", "armabi", "arm-linux-androideabi", "arm-linux-androideabi");
let x86 = () => buildForArch("x86", "x86", "x86", "x86", "x86", "i686-linux-android");

switch (Sys.argv) {
| [|_, "armv7"|] => armv7()
| [|_, "x86"|] => x86()
| [|_, "all" | "both"|] => {armv7(); x86()}

| _ => print_endline("Usage: build-android [arch]

Where arch is one of armv7, x86, or all
")
};