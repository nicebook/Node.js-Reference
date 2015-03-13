var crypto = require('crypto');
var fs = require('fs');

var signedkey = fs.readFileSync('signedkey.pem');
var sign = signedkey.toString('ascii');
var signature = new Buffer('examples, example@mandice.com');
var signed = crypto.createSign('RSA-SHA256');
signed.update(signature);
var sig = signed.sign(sign, 'hex');
console.log("The sig is : " + sig);
