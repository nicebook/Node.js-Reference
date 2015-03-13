var gm = require('gm');
var dirpath = 'images/';
var imgname = 'download-logo.png';
var tmppath = 'tmp/';

gm(dirpath + imgname) 

    .font('fonts/ariali.ttf', 12) 
    
    .drawText(5, 10, 'Hello Magic.') 
    
    .write(tmppath + 'New_' + imgname, function (err) {
        if (err)
            throw err;
        console.log('done');
});