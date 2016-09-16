/**
 * @author - bornkiller <hjj491229492@hotmail.com>
 * @description - gulp config tasks
 */
'use strict';

const gulp = require('gulp');
const gzip = require('gulp-gzip');
const tar = require('gulp-tar');

const configuration = {
  autoprefixer: {
    browsers: [
      'Explorer >= 9',
      'Chrome >= 26',
      'Firefox >= 26',
      'Safari >= 6'
    ],
    cascade: true
  },
  gzip: {
    threshold: 512,
    level: 9,
    memLevel: 2
  }
};

// tar dist files
gulp.task('package', function () {
  gulp.src('dist/**/*')
    .pipe(tar('archive.tar'))
    .pipe(gzip(configuration.gzip))
    .pipe(gulp.dest('ansible/roles/frontend/files/'));
});