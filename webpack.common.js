const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: {
      main: './src/index.js',
   },
// [OR, if only 1 entry] entry: './src/index.js',
   plugins: [
      new HtmlWebpackPlugin({
         title: 'Webpack template',
         template: './src/index.html',
      }),
   ],
   output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
   },
};