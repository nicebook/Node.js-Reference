var sharp = require('sharp');

var dirpath = 'images/';
var imgname = 'download-logo.png';
var tmppath = 'tmp/'

sharp(dirpath + imgname)
    .resize(50, 100)
    .crop()
    .toFile(tmppath + 'New_' + imgname, function (err, info) {
        if (err) 
            throw err;
        console.log('done');
    });