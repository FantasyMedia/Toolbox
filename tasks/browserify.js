/**
*
* browserify.js
*
* @description
* @author Fantasy <fantasyshao@icloud.com>
* @create 2014-12-04
* @update 2014-12-04
*/

var config = require('../config').browserify;

var browserify = require('browserify');
var watchify = require('watchify');
var source = require('vinyl-source-stream');
var gulp = require('gulp');

gulp.task('browserify', function () {

  var bundleQueue = config.bundleConfigs.length;

  var browserifyThis = function (bundleConfig) {

    var bundler = browserify({
      cache: {},
      packageCache: {},
      fullPaths: true,
      entries: bundleConfig.entries,
      extensions: config.extensions,
      debug: config.debug
    });

    var bundle = function () {

      return bundler
      .bundle()
      .on('error', function (err) {
        console.log(err);
      }).pipe(source(bundleConfig.outputName))
      .pipe(gulp.dest(bundleConfig.dest))
      .on('end', function () {
        console.log('Coffee Build Success!');
      });
    };

    bundler = watchify(bundler);
    bundler.on('update', bundle);

    return bundle();
  };

  config.bundleConfigs.forEach(browserifyThis);

});
