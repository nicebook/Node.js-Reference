var gm = require('gm');
var dirpath = 'images/';
var imgname = 'download-logo.png';
var tmppath = 'tmp/';

gm(dirpath + imgname) 
    .setFormat('gif') 
    .write(tmppath + 'New_' + imgname, function (err) {
        if (err)
            throw err;
        console.log('done');
});