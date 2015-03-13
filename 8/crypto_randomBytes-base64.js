var crypto = require('crypto');

var buf = crypto.randomBytes(16);
var bufbase64 = buf.toString('base64'); 

console.log(bufbase64);
