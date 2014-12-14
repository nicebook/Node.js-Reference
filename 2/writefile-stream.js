var fs = require('fs');

var stream = fs.createWriteStream('./writefile-stream.txt');

stream.write('Hello World');
