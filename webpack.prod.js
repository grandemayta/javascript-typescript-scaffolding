const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');

const dist = path.resolve(__dirname, './dist');

module.exports = merge(common, {
  output: {
    path: dist,
    filename: 'bundle.app.min.js'
  },
  plugins: [new ExtractTextPlugin('bundle.app.min.css'), new UglifyJSPlugin()]
});
