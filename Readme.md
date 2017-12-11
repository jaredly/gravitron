# [Gravitron](http://gravitron.surge.sh/)

this is a little game I'm cooking up, written in [Reason](https://reasonml.github.io), using [Reprocessing](https://github.com/Schmavery/reprocessing) (a cross-platform opengl-backed 2d-graphics library).

Try it out at http://gravitron.surge.sh/, and tell me what you think!

Download the osx native version from the [releases](https://github.com/jaredly/gravitron/releases) page.

![gameplay](gameplay.gif)

## Building

I'm depending on forked versions of reprocessing, resongl-web, and reasongl-native, so the build setup is pretty hard to get through. I'll fix this later.

### Android

```
$ adb shell stop
$ adb shell setprop log.redirect-stdio true
$ adb shell start
```

## License

This code is licensed under [Creative Commons Attribution-NonCommercial 4.0](https://creativecommons.org/licenses/by-nc/4.0/legalcode) (CC BY-NC 4.0). If you use this code, you must attribute me (Jared Forsyth), and link back to this repository.
If you want me to license parts of the codebase under a more permissive license, such as one that allows commercial use, please ask me.