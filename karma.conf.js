module.exports = function (config) {
  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: 'src/',
    
    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    // karma support glob pattern, so just inject deps script
    files: [
      //~ inject
      'lib/jquery/dist/jquery.js',
      'lib/underscore/underscore.js',
      'lib/angular/angular.js',
      'lib/angular-bootstrap/ui-bootstrap-tpls.js',
      'lib/angular-ui-router/release/angular-ui-router.js',
      'lib/bootstrap/dist/js/bootstrap.js',
      //~ endinject
      'lib/angular-mocks/angular-mocks.js', // angular-mocks can't auto inject
      'js/app.js',
      '**/*.config.js',
      '**/*.constant.js',
      '**/*.service.js',
      '**/*.filter.js',
      '**/*.controller.js',
      '**/*.directive.js',
      '../test/**/*.spec.js'
    ],

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
      'js/**/*.js': ['coverage']
    },
    
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
    browsers: ['Chrome'],
    
    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
