var sharp = require('sharp');

var dirpath = 'images/';
var imgname = 'download-logo.png';
var image = sharp(dirpath + imgname);

image.metadata(function(err, metadata) {
    if (err) 
        throw err;
    console.log(metadata);
});