/**
 * @description - karma webpack integration
 */
const WebpackKarmaConfig = require('./webpack.karma');

module.exports = function (config) {
  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',
    
    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    // karma support glob pattern, so just inject deps script
    files: [{
      pattern: 'karma.bundle.js', watched: false
    }],
    
    exclude: [],

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    // plugin support: junit, should config junitReporter in use
    // plugin support: coverage, should config coverageReporter and preprocessors in use
    reporters: ['coverage'],
    
    preprocessors: {
      // source files, that you wanna generate coverage for
      // do not include tests or libraries
      // (these files will be instrumented by Istanbul)
      'karma.bundle.js': ['webpack', 'sourcemap']
    },
    
    // Webpack use normal loader
    webpack: WebpackKarmaConfig,
  
    // Webpack please don't spam the console when running in karma!
    webpackServer: { noInfo: true },
    
    // optionally, configure the reporter
    coverageReporter: {
      reporters: [
        {
          type: 'lcov',
          dir: '../report/coverage/',
          subdir: 'lcov'
        },
        {
          type: 'html',
          dir: '../report/coverage/',
          subdir: 'html'
        }
      ]
    },
    
    // web server port
    port: 9876,
    
    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,
    
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    hostname: 'localhost',

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    // available options 'Chrome', 'IE', 'Firefox', 'PhantomJS'
    // 使用`webdriver-launcher`可以定制跨平台浏览器
    browsers: ['Chrome'],
    
    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
