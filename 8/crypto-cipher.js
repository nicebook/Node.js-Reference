var crypto = require('crypto');
var fs = require('fs');

var plaintext = new Buffer('Hello, This is a encrypted content.');
var cipher = crypto.createCipher('blowfish', '123');
var encrypted = cipher.update(plaintext, 'binary', 'hex');

encrypted += cipher.final('hex');
console.log("The encrypted string is : " + encrypted);
