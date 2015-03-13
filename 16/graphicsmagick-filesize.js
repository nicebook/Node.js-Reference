var gm = require('gm');
var dirpath = 'images/';
var imgname = 'download-logo.png';
var tmppath = 'tmp/';

gm(dirpath + imgname) 

    .filesize(function (err, data) { 
        if (err)
            throw err;
        console.log('done');
    });