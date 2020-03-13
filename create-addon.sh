#!/usr/bin/env sh

zip -FS -r dist/f1tv-english-firefox.xpi * \
    -i "background.js" "manifest.json"
