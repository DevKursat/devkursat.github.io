#!/usr/bin/env bash
set -e

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT="$(cd "$DIR/.." && pwd)"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

echo "🔨 Building Kursat Yilmaz AI Product Developer CVs..."

"$CHROME" \
  --headless=new \
  --disable-gpu \
  --allow-file-access-from-files \
  --print-to-pdf-no-header \
  --no-margins \
  --print-to-pdf="$ROOT/Kursat_Yilmaz_CV_EN.pdf" \
  "file://$DIR/cv-en.html"

echo "✅ Generated Kursat_Yilmaz_CV_EN.pdf"

"$CHROME" \
  --headless=new \
  --disable-gpu \
  --allow-file-access-from-files \
  --print-to-pdf-no-header \
  --no-margins \
  --print-to-pdf="$ROOT/Kursat_Yilmaz_CV_TR.pdf" \
  "file://$DIR/cv-tr.html"

echo "✅ Generated Kursat_Yilmaz_CV_TR.pdf"

ls -lh "$ROOT"/Kursat_Yilmaz_CV_*.pdf
