var gm = require('gm');
var dirpath = 'images/';
var imgname = 'download-logo.png';
var tmppath = 'tmp/';
var imageMagick = gm.subClass({ imageMagick: true });

imageMagick(dirpath + imgname)  
    .setFormat('gif') 
    .write(tmppath + 'imageMagick_' + imgname, function (err) {
        if (err)
            throw err;
        console.log('done');
});