/**
 * @description - webpack configuration, just for develop
 */
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    application: ['./src/app.js'],
    vendor: ['./src/vendor.js'],
    vendor_css: ['./src/vendor_css.js']
  },
  
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'application/[name].[hash].bundle.js',
    chunkFilename: 'application/[id].[chunkhash].chunk.js'
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
          'babel-loader?presets[]=es2015&cacheDirectory=true'
        ]
      },
      // UI configuration
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?root=' + path.resolve(__dirname, 'src'))
      },
      {
        test: /\.scss/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?root=' + path.resolve(__dirname, 'src') + '!sass-loader')
      },
      // UI configuration
      // fonts IE hack will skip loader without (\?.*)
      {
        test: /\.(png|jpe?g|gif|mp3|woff|woff2|ttf|eot|svg)(\?.*)?$/,
        loader: 'url-loader?limit=5000&name=[name].[hash].[ext]'
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
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['application', 'vendor', 'vendor_css']
    }),
    new ExtractTextPlugin('asset/css/[name].[hash].css'),
    new webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify('production'), // eslint-disable-line angular/json-functions
        'NODE_ENV': JSON.stringify('production') // eslint-disable-line angular/json-functions
      }
    }),
    // 此处有问题,暂时未有解决方案
    // new webpack.optimize.UglifyJsPlugin({
    //   sourceMap: false
    // }),
    new HtmlWebpackPlugin({
      favicon: './src/favicon.ico',
      template: './src/index.html',
      chunksSortMode: 'dependency'
    })
  ],
  
  // 此处不声明即不会生成sourcemap
  // devtool: 'cheap-module-source-map',
  
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
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    },
    stats: 'minimal'
  }
};