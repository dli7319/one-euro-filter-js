const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/OneEuroFilter.js',
  output: {
    filename: 'OneEuroFilter.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget : 'umd',
    globalObject: 'typeof self !== \'undefined\' ? self : this',
  },
};
