#!/usr/bin/env bash

# build it
./lib/bs/native/builder.native
cp assets/* android/app/src/main/assets/
cd android && ./gradlew installDebug