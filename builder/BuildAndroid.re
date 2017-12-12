
Builder.compile(Builder.{
  name: "reasongl",
  shared: true,
  mainFile: "./src/android.re",
  cOpts: "-fno-omit-frame-pointer -O3 -fPIC -llog -landroid -lGLESv3 -lEGL",
  mlOpts: "-runtime-variant _pic -g",
  dependencyDirs: ["./reasongl-interface/src", "./reasongl-android/src", "./reprocessing/src"],
  buildDir: "_build",
  env: "BSB_BACKEND=native-android",

  cc: "~/.opam/4.04.0-android32/android-ndk/toolchains/aarch64-linux-android-4.9/prebuilt/darwin-x86_64/libexec/gcc/aarch64-linux-android/4.9/cc1",
  outDir: "./android/app/src/main/jniLibs/armeabi-v7a/",
  ppx: ["./reasongl-android/matchenv.ppx"],
  ocamlDir: "~/.opam/4.04.0-android32/android-sysroot",
  refmt: "~/.opam/4.04.2/bin/refmt",
  /* ppx: ["node_modules/matchenv/lib/bs/native/index.native"], */
  /* ocamlDir: "./node_modules/bs-platform/vendor/ocaml", */
  /* refmt: "./node_modules/bs-platform/bin/refmt3.exe" */
});
