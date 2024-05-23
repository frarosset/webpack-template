const path = require('path');

module.exports = {
   entry: {
      main: './src/index.js',
   },
// [OR, if only 1 entry] entry: './src/index.js',
   output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
   },
};