var zlib = require('zlib');
var buffer = require('buffer');

var source = new Buffer('Hello World');
var result = zlib.deflate(source);
console.log(result);
