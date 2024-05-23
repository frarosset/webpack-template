const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge( common, {
   mode: 'development',
   devtool: 'inline-source-map',
   devServer: {
      static: './dist',
   },
   optimization: {
      runtimeChunk: 'single' // if multiple entry points in HTML
   },
});