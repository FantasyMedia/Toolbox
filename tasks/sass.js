/**
 *
 * sass.js
 *
 * @description
 * @author Fantasy <fantasyshao@icloud.com>
 * @create 2014-12-04
 * @update 2014-12-04
 */

var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var config = require('../config').sass;

gulp.task('sass', function () {

  return gulp.src(config.src)
    .pipe(sass(config.settings))
    .on('error', function (err) {
      console.log(err);
    })
    .pipe(gulp.dest(config.dest));

});