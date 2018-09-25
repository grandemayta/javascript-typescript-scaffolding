const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const src = path.resolve(__dirname, './src');
const dist = path.resolve(__dirname, './dist');

module.exports = {
  entry: {
    vendor: ['navigo'],
    app: `${src}/app/index.ts`
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          name: 'vendor',
          test: 'vendor',
          enforce: true
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loader: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
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
    new CleanWebpackPlugin([dist], {
      root: process.cwd(),
      verbose: true,
      dry: false
    }),
    new HtmlWebpackPlugin({
      template: `${src}/app/index.html`,
      filename: 'index.html'
    })
  ],
  resolve: {
    extensions: ['.ts', '.js', '.scss'],
    modules: ['node_modules', 'src']
  }
};
