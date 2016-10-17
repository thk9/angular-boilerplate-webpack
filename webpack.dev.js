/**
 * @description - webpack configuration, just for develop
 */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    application: ['webpack-dev-server/client?http://localhost:8000', 'webpack/hot/dev-server', './src/app.js'],
    vendor: ['./src/vendor.js'],
    vendor_css: ['./src/vendor_css.js']
  },
  
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'application/[name].bundle.js',
    chunkFilename: 'application/[id].chunk.js'
  },
  
  resolve: {
    root: [path.resolve(__dirname, 'src')],
    extensions: ['', '.js', '.css', '.html'],
    alias: {
      'angular$': path.join(__dirname, 'node_modules', 'angular', 'angular.min.js'),
      'angular-animate$': path.join(__dirname, 'node_modules', 'angular-animate', 'angular-animate.min.js'),
      'angular-resource$': path.join(__dirname, 'node_modules', 'angular-resource', 'angular-resource.min.js'),
      'angular-sanitize$': path.join(__dirname, 'node_modules', 'angular-sanitize', 'angular-sanitize.min.js'),
      'angular-cookies$': path.join(__dirname, 'node_modules', 'angular-cookies', 'angular-cookies.min.js'),
      'angular-mocks$': path.join(__dirname, 'node_modules', 'angular-mocks', 'angular-mocks.min.js'),
      'angular-ui-router$': path.join(__dirname, 'node_modules', 'angular-ui-router', 'release', 'angular-ui-router.min.js'),
      'angular-bootstrap$': path.join(__dirname, 'node_modules', 'angular-bootstrap', 'ui-bootstrap-tpls.min.js')
    }
  },
  
  module: {
    noParse: [/angular-[a-zA-Z]+(\.min)?\.js$/],
    preLoaders: [],
    postLoaders: [],
    loaders: [
      // give up weird ng-template cache
      {
        test: /\.html$/,
        exclude: /index\.html$/,
        loaders: [
          'html-loader?attrs[]=img:src&root=' + path.resolve(__dirname, 'src')
        ]
      },
      // html-webpack-plugin weird issue fix
      {
        test: path.resolve(__dirname, 'src', 'index.html'),
        loaders: ['raw-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          'ng-annotate-loader?add=true',
          'babel-loader?presets[]=es2015&presets[]=stage-3&plugins[]=transform-function-bind&cacheDirectory=true'
        ]
      },
      // UI configuration
      {
        test: /\.css$/,
        // loaders: ['style-loader', 'css-loader?root=' + path.resolve(__dirname, 'src')]
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?root=' + path.resolve(__dirname, 'src'))
      },
      {
        test: /\.scss/,
        exclude: /node_modules/,
        loaders: ['style-loader', 'css-loader?root=' + path.resolve(__dirname, 'src'), 'sass-loader']
      },
      // UI configuration
      // fonts IE hack will skip loader without (\?.*)
      {
        test: /\.(png|jpe?g|gif|mp3|woff|woff2|ttf|eot|svg)(\?.*)?$/,
        loader: 'url-loader?limit=5000&name=[name].[ext]'
      },
      // rare condition for API mocks
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: require.resolve('jquery'),
        loader: 'expose?$!expose?jQuery'
      }
    ]
  },
  
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(true),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['application', 'vendor', 'vendor_css']
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify('develop'), // eslint-disable-line angular/json-functions
        'NODE_ENV': JSON.stringify('develop') // eslint-disable-line angular/json-functions
      }
    }),
    new ExtractTextPlugin('[name].css'),
    new HtmlWebpackPlugin({
      favicon: './src/favicon.ico',
      template: './src/index.html',
      chunksSortMode: 'dependency'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  
  devtool: 'cheap-module-source-map',
  
  node: {
    global: 'window',
    Buffer: 'empty',
    crypto: 'empty',
    process: true,
    clearImmediate: false,
    setImmediate: false
  },
  
  devServer: {
    contentBase: './dist/',
    quiet: false,
    historyApiFallback: true,
    hot: true,
    port: 8000,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    },
    stats: 'minimal'
  }
};