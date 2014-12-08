/**
*
* config.js
*
* @description
* @author Fantasy <fantasyshao@icloud.com>
* @create 2014-12-04
* @update 2014-12-04
*/

var dest = './dist';
var src  = './src';

module.exports = {

  sass: {
    src: src + '/sass/*.sass',
    dest: dest + '/css',
    settings: {
      style: 'compressed',
      sourcemap: true,
      sourcemapPath: '../../src/sass',
      noCache: true
    }
  },

  browserify: {
    debug: true,
    extensions: ['.coffee'],
    bundleConfigs: [{
      entries: src + '/coffee/site.coffee',
      dest: dest + '/js',
      outputName: 'site.js'
    }]
  }

};
