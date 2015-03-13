var crypto = require('crypto');

var buf = crypto.randomBytes(16);
var cut_bufhex = buf.toString('base64').substr(0, 8);
console.log('Have %d bytes of random string by base64: ', cut_bufhex.length, cut_bufhex);
