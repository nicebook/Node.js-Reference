var gm = require('gm');
var dirpath = 'images/';
var imgname = 'download-logo.png';
var tmppath = 'tmp/';

gm(dirpath + imgname) 

    .crop(50, 100, 5, 10) 
    .write(tmppath + 'New_' + imgname, function (err) {
        if (err)
            throw err;
        console.log('done');
});