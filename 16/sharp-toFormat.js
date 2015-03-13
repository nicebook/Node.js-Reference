var sharp = require('sharp');

var dirpath = 'images/';
var imgname = 'download-logo.png';
var tmppath = 'tmp/'

sharp(dirpath + imgname)
    .jpeg() 
    .toFile(tmppath + 'New_' + 'output.jpeg', function (err, info) {
        if (err) 
            throw err;
        console.log('done');
    });

sharp(dirpath + imgname)
    .webp() 
    .toFile(tmppath + 'New_' + 'output.webp', function (err, info) {
        if (err) 
            throw err;
        console.log('done');
    });