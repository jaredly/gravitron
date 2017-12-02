rm -rf Gravitron.app
./macapp.sh Gravitron icon.png
DEST=Gravitron.app/Contents/MacOS
cp ../lib/bs/native/prod.native $DEST/Gravitron
SDL_PATH=`otool -L $DEST/Gravitron | grep libSDL | sed -e 's/(.*//' | sed -e 's/[[:space:]]//g'`
install_name_tool -change $SDL_PATH @executable_path/libSDL2-2.0.0.dylib $DEST/Gravitron
cp $SDL_PATH $DEST/libSDL2-2.0.0.dylib
cp -r ../assets Gravitron.app/Contents/MacOS/
zip -r Gravitron.zip Gravitron.app
