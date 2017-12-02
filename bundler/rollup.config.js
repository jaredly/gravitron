// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
import analyze from 'rollup-analyzer-plugin'
import Visualize from 'rollup-plugin-visualizer'
const opts = {limit: 15, filter: [], root: '/'}

export default {
  input: '../lib/es6/src/index.js',
  output: {
    file: '../docs/assets/bundle-rollup.js',
    format: 'iife'
  },
  name: 'Gravitron',
  plugins: [
    Visualize(),
    analyze(opts),
    resolve({
      // use "module" field for ES6 module if possible
      module: true, // Default: true

      // use "jsnext:main" if possible
      // – see https://github.com/rollup/rollup/wiki/jsnext:main
      jsnext: true,  // Default: false

      // use "main" field or index.js, even if it's not an ES6 module
      // (needs to be converted from CommonJS to ES6
      // – see https://github.com/rollup/rollup-plugin-commonjs
      main: true,  // Default: true

      // some package.json files have a `browser` field which
      // specifies alternative files to load for people bundling
      // for the browser. If that's you, use this option, otherwise
      // pkg.browser will be ignored
      browser: true,  // Default: false

      // If true, inspect resolved files to check that they are
      // ES2015 modules
      modulesOnly: true, // Default: false
    })
  ]
};
