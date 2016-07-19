const path = require('path');
const webpack = require('webpack');
const ROOT_PATH = path.resolve(__dirname);

module.exports = {
  devtool: 'eval',

  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    './src/index',
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      lodash: path.resolve(ROOT_PATH, 'node_modules/lodash'),
    },
  },

  output: {
    path: path.resolve(ROOT_PATH, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/',
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel'],
        include: path.resolve(ROOT_PATH, 'src'),
      },
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: 'node_modules',
        include: path.resolve(ROOT_PATH, 'src'),
        query: {
          presets: ['es2015', 'stage-0'],
        },
      },
      {
        test: /\.css$/,
        loader: 'style!css',
        include: path.resolve(ROOT_PATH, 'src', 'styles'),
      },
      {
        test: /\.scss?$/,
        loader: 'style!css!sass',
        include: path.resolve(ROOT_PATH, 'src', 'styles'),
      },

      {
        test: /\.png$/,
        loader: 'file',
      },

      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'url',
        include: path.resolve(ROOT_PATH, 'src', 'fonts'),
      },
    ],
  },
};
