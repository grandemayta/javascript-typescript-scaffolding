const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

const src = path.resolve(__dirname, './src');
const dist = path.resolve(__dirname, './dist');

module.exports = {
  entry: [`${src}/app/index.js`],
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
      },
      {
        test: /\.(jpg|png|gif|eot|woff|woff2|ttf|svg)$/,
        loader: 'file-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin([dist]),
    new HtmlWebpackPlugin({
      template: `${src}/app/index.html`,
      filename: 'index.html'
    })
  ],
  resolve: {
    extensions: ['.js', '.scss'],
    modules: ['node_modules', 'src']
  }
};
