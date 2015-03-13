var crypto = require('crypto');

var buf = crypto.randomBytes(16);
var bufhex = buf.toString('hex');  

console.log(bufhex);
