var fs = require('fs');
var zlib = require('zlib');

var gunzip = zlib.createGunzip();
var source = fs.createReadStream('source.txt.gz');
var output = fs.createWriteStream('source.txt');
source.pipe(gunzip).pipe(output);
