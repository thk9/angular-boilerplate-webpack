/**
 * @description - webpack configuration, just for develop
 */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    application: ['./src/app.js']
  },
  
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'application/[name].bundle.js',
    chunkFilename: 'application/[id].chunk.js'
  },
  
  resolve: {
    root: [path.resolve(__dirname, 'src')],
    extensions: ['js', 'css', 'html'],
    alias: {
      'angular': path.join(__dirname, 'node_modules', 'angular', 'angular.min.js'),
      'angular-animate': path.join(__dirname, 'node_modules', 'angular-animate', 'angular-animate.min.js'),
      'angular-resource': path.join(__dirname, 'node_modules', 'angular-resource', 'angular-resource.min.js'),
      'angular-sanitize': path.join(__dirname, 'node_modules', 'angular-sanitize', 'angular-sanitize.min.js'),
      'angular-cookies': path.join(__dirname, 'node_modules', 'angular-cookies', 'angular-cookies.min.js'),
      'angular-mocks': path.join(__dirname, 'node_modules', 'angular-mocks', 'angular-mocks.js'),
      'angular-ui-router': path.join(__dirname, 'node_modules', 'angular-ui-router', 'release', 'angular-ui-router.min.js'),
      'angular-ui-bootstrap': path.join(__dirname, 'node_modules', 'angular-ui-bootstrap', 'ui-bootstrap-tpls.min.js')
    }
  },
  
  module: {
    noParse: [/angular-?[a-zA-Z]+/],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          'ng-annotate-loader?add=true',
          'babel-loader?presets[]=es2015&cacheDirectory=true'
        ]
      },
      // give up weird ng-template cache
      {
        test: /\.html$/,
        exclude: /index\.html$/,
        loaders: [
          'raw-loader',
          'html-loader?attrs[]=img:src&root=' + path.resolve(__dirname, 'src')
        ]
      },
      // fonts IE hack will skip loader without (\?.*)
      {
        test: /.(png|jpe?g|gif|mp3|woff|woff2|ttf|eot|svg)(\?.*)$/,
        loader: 'url-loader?limit=5000&name=[name].[ext]'
      },
      // rare condition for API mocks
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': 'develop' // eslint-disable-line angular/json-functions
      }
    }),
    new HtmlWebpackPlugin({
      favicon: './src/favicon.ico',
      template: 'raw!./src/index.html',
      chunksSortMode: 'dependency'
    })
  ],
  
  node: {
    process: true,
    Buffer: 'empty',
    crypto: 'empty'
  },
  
  devtool: 'inline-source-map',
  
  devServer: {
    contentBase: './dist/',
    quiet: false,
    historyApiFallback: true,
    watchOptions: {
      aggregateTimeout: 250,
      poll: 1000
    },
    stats: 'minimal'
  }
  
};