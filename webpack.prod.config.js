const path = require('path');
const webpack = require('webpack');
const ROOT_PATH = path.resolve(__dirname);

module.exports = {
  devtool: 'source-map',

  entry: [
    './src/index',
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },

  output: {
    path: path.resolve(ROOT_PATH, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/',
  },

  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false,
      },
    }),

    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
      },
    }),
  ],

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
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
        loader: 'file',
      },
    ],
  },
};
