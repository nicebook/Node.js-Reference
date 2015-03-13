var crypto = require('crypto');
var fs = require('fs');

var encrypted = 'bacebaf929f61b05d11fcb23a76e42f0465d0acb7a9e76675a75b46eb936300c8e14000ca9ff7eb8';
var decipher = crypto.createDecipher('blowfish', '123');
var decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');
console.log("The plaintext is : " + decrypted);
