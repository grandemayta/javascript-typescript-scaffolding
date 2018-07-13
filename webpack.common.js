const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

const src = path.resolve(__dirname, './src');
const dist = path.resolve(__dirname, './dist');

module.exports = {
  entry: [`${src}/index.js`],
  output: {
    path: dist,
    filename: process.env.NODE_ENV === 'prod' ? 'bundle.app.min.js' : 'bundle.app.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css-loader!sass-loader'),
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin([dist]),
    new ExtractTextPlugin(
      process.env.NODE_ENV === 'prod' ? 'bundle.app.min.css' : 'bundle.app.css'
    ),
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html'
    })
  ],
  resolve: {
    extensions: ['.js', '.scss'],
    modules: ['node_modules', 'src']
  }
};
