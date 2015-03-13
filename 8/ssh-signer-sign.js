var crypto = require('crypto');
var fs = require('fs');
var signer = require('ssh-signer')

var plaintext = new Buffer('examples, example@mandice.com.');

var opt = {
	alg:'RSA-SHA256',
	hash:'base64'
}	

var sig = signer.signPrivateKey( plaintext, 'signedkey.pem', opt);
console.log("The sig is : " + sig);
