var crypto = require('crypto');
var fs = require('fs');

var keypair = require('keypair');
var pair = keypair();
var Privatekey = pair.private.toString('ascii');
var hmac = crypto.createHmac('sha1', Privatekey);

hmac.update('cryptostring');
hmacdigest = hmac.digest('hex');
console.log("The result is : " + hmacdigest);

fs.writeFile('Publickey.pem', pair.public, function (err) {
    	if (err) {
            	console.log('Cant write Public key to file!');
    	}
}); 	

fs.writeFile('Privatekey.pem', pair.private, function (err) {
    	if (err) {
            	console.log('Cant write private key to file!');
    	}
}); 
