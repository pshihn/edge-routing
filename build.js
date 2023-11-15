/* eslint-disable */

const { build } = require('esbuild');

build({
  entryPoints: ['./src/main.ts'],
  outfile: './dist/build.js',
  bundle: true,
  minify: true
});