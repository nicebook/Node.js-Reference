var crypto = require('crypto');

var buf = crypto.randomBytes(16);
var cut_bufhex = buf.toString('hex').substr(0, 8);
console.log('Have %d bytes of random string by hex: ', cut_bufhex.length, cut_bufhex);
