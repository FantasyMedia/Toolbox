/**
 *
 * app.js
 *
 * @description
 * @author Fantasy <fantasyshao@icloud.com>
 * @create 2014-12-09
 * @update 2014-12-09
 */

var express = require('express');
var server = express();

server.use(express.static(__dirname)).listen(3033);

console.log('Server is listening on http://localhost:3033');
