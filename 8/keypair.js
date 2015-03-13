var crypto = require('crypto');
var fs = require('fs');

var keypair = require('keypair');
var pair = keypair();

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

console.log(pair);
