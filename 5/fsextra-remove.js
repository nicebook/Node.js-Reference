var fsextra = require('fs-extra');

fsextra.remove('/tmp/dirs', function(err) {

    if (err) {
        console.error(err);
        return;
    }

    console.log('Removed');
});
