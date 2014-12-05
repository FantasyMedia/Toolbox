/**
*
* default.js
*
* @description
* @author Fantasy <fantasyshao@icloud.com>
* @create 2014-12-04
* @update 2014-12-04
*/

var gulp = require('gulp');
var config = require('../config');

gulp.task('default', ['watch']);

gulp.task('watch', ['browserify', 'sass'], function () {
  gulp.watch(config.sass.src, ['sass']);
});
