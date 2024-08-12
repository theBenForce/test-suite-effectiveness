/* eslint-disable @typescript-eslint/no-require-imports */
// rollup.config.js
const { defineConfig } = require("rollup");
const { codecovRollupPlugin } = require("@codecov/rollup-plugin");
const { default: esbuild } = require('rollup-plugin-esbuild');

module.exports = defineConfig({
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs'
    }
  ],
  plugins: [
    esbuild(),
    codecovRollupPlugin({
      enableBundleAnalysis: process.env.CODECOV_TOKEN !== undefined,
      bundleName: "index",
      uploadToken: process.env.CODECOV_TOKEN,
    }),
  ],
});