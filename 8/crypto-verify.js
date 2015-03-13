var crypto = require('crypto');
var fs = require('fs');

var sig = '2961c69313b0c5361c93049e90af4acb42299e9c48e7a9c65696238b93ea1d79c369ef7c840109dd9aded0d47f51ee53a8b07bc3e6e43019dcb4c9bb772ed201c021a772ca0d9a826b72c4abca0dee2e0fe58a2d4f258b23a0839ee4f0e5ac4fee5e10fefd9ba6750c7ed7ec7f3e7b7daeee89b5edd1cb27db133db245755531d24f7d82ed1630116a3bdbd80c44b24b06cc5df90fdbafa908b16632aa02c320c304090c78487c87551ac396aa302b71cec4ab68be509541c18c23e66b83bcb1f370880a77b15e3e113e8d2823208ef1ecb8518fe10cabe1278ef2a8484cebba75c95f279193c5054fcfb88e0bd0a4647a74086ac4c09c5e5023342fc2d93175'

var signature = new Buffer('examples, example@mandice.com');
var certificate = fs.readFileSync('certificate.pem');
var cert = certificate.toString('ascii');
var verified = crypto.createVerify('RSA-SHA256');
verified.update(signature);
var result = verified.verify(cert, sig, 'hex');
console.log("The result is : " + result);
