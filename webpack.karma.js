/**
 * @description - webpack configuration, just for develop
 * @author bornkiller <hjj491229492@hotmail.com
 */
const path = require('path');
const webpack = require('webpack');

module.exports = {
  resolve: {
    root: [path.resolve(__dirname, 'src')],
    extensions: ['', '.js', '.css', '.html'],
    alias: {
      'angular$': path.join(__dirname, 'node_modules', 'angular', 'angular.min.js'),
      'angular-animate$': path.join(__dirname, 'node_modules', 'angular-animate', 'angular-animate.min.js'),
      'angular-resource$': path.join(__dirname, 'node_modules', 'angular-resource', 'angular-resource.min.js'),
      'angular-sanitize$': path.join(__dirname, 'node_modules', 'angular-sanitize', 'angular-sanitize.min.js'),
      'angular-cookies$': path.join(__dirname, 'node_modules', 'angular-cookies', 'angular-cookies.min.js'),
      'angular-mocks$': path.join(__dirname, 'node_modules', 'angular-mocks', 'angular-mocks.js'),
      'angular-ui-router$': path.join(__dirname, 'node_modules', 'angular-ui-router', 'release', 'angular-ui-router.min.js'),
      'angular-bootstrap$': path.join(__dirname, 'node_modules', 'angular-bootstrap', 'ui-bootstrap-tpls.min.js')
    }
  },
  
  // 关于静态文件,测试最终bundle内部不应该存在引入`css`的行为
  // 可能存在部分`json`, `png`等文件引用
  // 此处声明`loader`仅保证`webpack`正常
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
      // 测试环境无须ng-strict-di
      // coverage 只关注应用代码,无须测试,依赖文件
      // 如果测试文件不处理
      {
        test: /\.js$/,
        exclude: /(node_modules|spec)/,
        loaders: [
          // 'ng-annotate-loader?add=true',
          'babel-loader?presets[]=es2015&cacheDirectory=true',
          'istanbul-instrumenter-loader?esModules=true',
        ]
      },
      // UI configuration
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader?root=' + path.resolve(__dirname, 'src')]
      },
      {
        test: /\.scss/,
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
      }
    ]
  },
  
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify('develop'), // eslint-disable-line angular/json-functions
        'NODE_ENV': JSON.stringify('develop') // eslint-disable-line angular/json-functions
      }
    })
  ],
  
  devtool: 'inline-source-map',
  
  node: {
    global: 'window',
    Buffer: 'empty',
    crypto: 'empty',
    process: true,
    clearImmediate: false,
    setImmediate: false
  }
};