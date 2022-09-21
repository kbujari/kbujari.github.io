#!/bin/bash

if which cwebp 2>/dev/null; then
  echo "Found cwebp, attempting to compress all source photos."
  # rm static/gallery/*.webp
  for file in static/gallery/*.jpg; do
    if ! [ -f $file.webp ]; then
      echo "compressing $file into webp"
      cwebp -quiet -q 20 $file -o $file.webp
    else
      echo "$file.webp already exists"
    fi
  done
else
  echo "cwebp conversion tool not found, using existing photos."
fi
