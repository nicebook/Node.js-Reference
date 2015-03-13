var crypto = require('crypto');
var fs = require('fs');
var signer = require('ssh-signer')

var plaintext = new Buffer('examples, example@mandice.com.');

var sig = 'WnvtrBVebrKoxqu4z0tSvEbH7/Q1f1MioLZIgZlGhFimoVykGkNQLsHtvT5XEUhZ1CHUnPBVwVKNpJv5ILUWXi92tgHkqUL5W5vRWojktt0rBEQcZUa6F3aFMgdpbVs8NYz0EaH2Wf7IASSEo6jd9P2aiZ2QxQi9VDJ6ssfsPuYDAtiqTWiwYTsUeLsuXOZf+/cLuvZlg9nPSjT1Qj7NhMbBT00qXA8eqBEJVT1YYIQ3fX5X0RbX+ARItln3fx9Bg3fArWu3McM3OOZF9tpK4qXv/oBaXvxKSUQ8GXHmrNzvLnbBLpDTaA6OAFygyP5ZWSYOPPQyoBeUXzq1yf3gAQ==';

var opt = {
	alg:'RSA-SHA256',
	hash:'base64'
}	

var result = signer.verify(sig, plaintext, 'certificate.pem', opt);
console.log("The result is : " + result);
