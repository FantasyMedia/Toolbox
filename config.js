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
    dest: dest,
    settings: {
      sourceComments: 'map',
      noCached: true
    }
  },

  browserify: {
    debug: true,
    extensions: ['.coffee'],
    bundleConfigs: [{
      entries: src + '/coffee/test.coffee',
      dest: dest,
      outputName: 'test.js'
    }]
  }

};
