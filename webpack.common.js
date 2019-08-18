/* eslint-disable import/no-extraneous-dependencies */
var path = require('path');
// const FileManagerPlugin = require('filemanager-webpack-plugin');
// const {
//   BundleAnalyzerPlugin
// } = require('webpack-bundle-analyzer');
// const {
//   isProduction
// } = require('webpack-mode');

var webpack = require('webpack');
var npmModules = require('./package.json').dependencies;
var vendorLibs = [];
var _ = require('lodash');

if (npmModules) {
  _.each(npmModules, function (item, key) {
    vendorLibs.push(key);
  });
}

module.exports = {
  entry: {
    entry: './src/config.js'
  },
  output: {
    path: path.resolve(__dirname, 'publish'),
    filename: "bundle.js",
  
  },
  resolve: {
    extensions: ['.js', '.json', '.css'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },

  externals: {
    cc: 'cc',
    ccui: 'ccui'
  },
  module: {
    rules: [{
        enforce: 'pre',
        test: /\.js$/,
        include: [path.resolve(__dirname, 'src')],
        exclude: [path.resolve(__dirname, 'node_modules'), path.resolve(__dirname, 'frameworks')]
      },
      {
        test: /\.js$/,
        include: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'res')],
        exclude: [path.resolve(__dirname, 'node_modules'), path.resolve(__dirname, 'frameworks')],
        loader: 'babel-loader',
      }
    ],
  },

  // optimization: {
  //   splitChunks: {
  //     cacheGroups: {
  //       vendor: {
  //         test: /[\\/]node_modules[\\/]/,
  //         name: 'vendor',
  //         chunks: 'all',
  //         priority: 1,
  //       },
  //       common: {
  //         name: 'common',
  //         chunks: 'all',
  //         minSize: 1,
  //         priority: 0,
  //       },
  //     },
  //   },
  // },

};