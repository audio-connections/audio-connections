#!/bin/bash
# Search iTunes for an artist + title and print the top song-kind matches.
# Usage: ./itunes_lookup.sh "Artist" "Title"
# Requires: curl, jq, python3
artist=$1
title=$2
term=$(python3 -c "import urllib.parse,sys;print(urllib.parse.quote_plus(sys.argv[1]))" "$artist $title")
curl -s "https://itunes.apple.com/search?media=music&entity=song&limit=5&term=$term" \
  | jq -r '.results[] | select(.kind=="song") | "\(.trackId)\t\(.artistName) — \(.trackName) [\(.collectionName)] preview=\(.previewUrl)"'
