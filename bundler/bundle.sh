rm -rf Gravitron.app
./macapp.sh Gravitron icon.png
cp ../lib/bs/native/prod.native Gravitron.app/Contents/MacOS/Gravitron
cp -r ../assets Gravitron.app/Contents/MacOS/
