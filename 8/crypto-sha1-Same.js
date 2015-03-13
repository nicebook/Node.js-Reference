var crypto = require('crypto');

var sha1 = crypto.createHash('sha1');
sha1.update('cryptostring');

var sha1digest = sha1.digest('base64');
console.log("The result is :" + sha1digest);
 
sha1 = crypto.createHash('sha1');
sha1.update('crypto');
sha1.update('string');
sha1digest = sha1.digest('base64');
console.log("The another result is : " + sha1digest);
