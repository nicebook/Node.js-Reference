var fse = require('fs-extra');

fse.move('/tmp/src.txt', '/tmp/dest.txt', function(err) {

    if (err) {
        console.error(err);
        return;
    }

    console.log('Moved');
});
