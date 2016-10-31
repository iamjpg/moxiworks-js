var webpack = require('webpack');
var path = require("path");
var PACKAGE = require('./package.json');
var version = PACKAGE.version;
var glob = require('glob');

module.exports = {
  entry: glob.sync("./src/**/*.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/build/",
    filename: "moxi-jsapi-" + version + ".js",
    libraryTarget: 'umd'
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel',
      query: {
        presets: ['es2015']
      }
    }]
  }
};
