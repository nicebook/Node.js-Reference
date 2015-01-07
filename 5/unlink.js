var fs = require('fs');

fs.unlink('/tmp/test', function(err) {

    if (err) {
        console.error(err);
        return;
    }

    console.log('Removed');
});
