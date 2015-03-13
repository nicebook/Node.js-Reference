var sharp = require('sharp');

var dirpath = 'images/';
var imgname = 'download-logo.png';
var tmppath = 'tmp/'

sharp(dirpath + imgname)
    .rotate(45)
    .toFile(tmppath + 'New_' + imgname, function (err, info) {
        if (err) 
            throw err;
        console.log('done');
    });