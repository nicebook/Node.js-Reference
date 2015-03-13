var sharp = require('sharp');

var dirpath = 'images/';
var imgname = 'download-logo.png';
var tmppath = 'tmp/'

sharp(dirpath + imgname)
    .resize(300) 
    .toFile(tmppath + 'New_' + imgname);