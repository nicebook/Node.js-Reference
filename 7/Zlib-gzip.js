var fs = require('fs');
var zlib = require('zlib');

var gzip = zlib.createGzip();
var source = fs.createReadStream('source.txt');
var output = fs.createWriteStream('source.txt.gz');
source.pipe(gzip).pipe(output);