var fs = require('fs');

fs.rmdir('/tmp/test', function(err) {

    if (err) {
        console.error(err);
        return;
    }

    console.log('Removed');
});
