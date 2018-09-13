import json from 'rollup-plugin-json';

import pkg from './package.json';

export default {
  input: 'src/main.js',
  output: [
    { file: pkg.main, format: 'cjs' },
    { file: pkg.module, format: 'es' }
  ],
  plugins: [
    json({
      preferConst: true,
      compact: true
    })
  ]
};
