var fs = require('fs');

fs.rmdir('/tmp/testdir', function(err) {

    if (err) {
        console.error(err);
        return;
    }

    console.log('Removed');
});
