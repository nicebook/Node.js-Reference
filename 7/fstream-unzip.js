var fs = require('fs');
var fstream = require('fstream');
var unzip = require('unzip');

var source = fs.createReadStream('dir.zip');
var output = fstream.Writer('./');
source
  .pipe(unzip.Parse())
  .pipe(output)
