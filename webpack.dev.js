const ExtractTextPlugin = require('extract-text-webpack-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');

const dist = path.resolve(__dirname, './dist');

module.exports = merge(common, {
  output: {
    path: dist,
    filename: 'bundle.app.js'
  },
  devtool: 'source-map',
  devServer: {
    contentBase: dist,
    port: 3002,
    open: true
  },
  plugins: [new ExtractTextPlugin('bundle.app.css')]
});
