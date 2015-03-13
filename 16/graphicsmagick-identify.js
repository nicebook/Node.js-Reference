var gm = require('gm');
var dirpath = 'images/';
var imgname = 'download-logo.png';

gm(dirpath + imgname) 

    .identify(function (err, data) { 
        if (err) 
            throw err;
        console.log(data);
    }); 