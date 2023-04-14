import * as path from 'path';
import * as url from 'url';
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

export default {
  mode: 'production',
  entry: './src/OneEuroFilter.js',
  output: {
    filename: 'OneEuroFilter.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget : 'umd',
    globalObject: 'typeof self !== \'undefined\' ? self : this',
  },
};
