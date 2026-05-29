#!/usr/bin/env bash
# Build the vendored reference ebur128 wrapper to wasm and install the artifact
# at src/replaygain/ebur128.wasm. Requires a Rust toolchain with the
# wasm32-unknown-unknown target (rustup target add wasm32-unknown-unknown).
# No wasm-bindgen / wasm-pack — the output is a plain module the JS loader
# (src/replaygain/measureWasm.ts) instantiates directly.
set -euo pipefail

here="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
crate="$here/ebur128"
out="$here/../src/replaygain/ebur128.wasm"

cargo build --release --target wasm32-unknown-unknown --manifest-path "$crate/Cargo.toml"
cp "$crate/target/wasm32-unknown-unknown/release/ac_ebur128.wasm" "$out"

bytes=$(wc -c < "$out" | tr -d ' ')
echo "wrote $out ($bytes bytes)"
