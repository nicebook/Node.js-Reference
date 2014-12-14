var fs = require('fs');

var file = fs.readFileSync('./readfile.js');

console.log(file.toString());
