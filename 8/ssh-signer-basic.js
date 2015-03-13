var fs = require('fs');
var signer = require('ssh-signer')

var key = signer.sshkeygen();

fs.writeFile('signedkey.pem', key.private, function (err) {
	if (err) {
		console.log('Cant write signed key to file!');
	}
});

fs.writeFile('certificate.pem', key.public, function (err) {
	if (err) {
		console.log('Cant write certificate to file!');
	}
});	
