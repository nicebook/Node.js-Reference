var fs = require('fs');
var qr = require('qr-image');
 
var qr_img = qr.image('Chapter 18', { type: 'png' });
var output = fs.createWriteStream('Chapter18.png');
qr_img.pipe(output);