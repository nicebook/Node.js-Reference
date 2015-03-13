var crypto = require('crypto');

var md5 = crypto.createHash('md5');
md5.update('cryptostring');

var md5digest = md5.digest();
console.log("The result is : " + md5digest);

md5 = crypto.createHash('md5');
md5.update('cryptostring');

md5digest = md5.digest('base64');
console.log("The result is : " + md5digest);
