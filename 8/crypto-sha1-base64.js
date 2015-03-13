var crypto = require('crypto');

var sha1 = crypto.createHash('sha1');
sha1.update('cryptostring');

var sha1digest = sha1.digest('base64');
console.log("The result is :" + sha1digest);
