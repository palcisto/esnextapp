const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: ['babel-polyfill', path.resolve(__dirname, './src/index.js')],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './build')
  },

  resolve: {
    extensions: [".js"],
    modules: ['src', 'node_modules']
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: true
    })
  ]
};
