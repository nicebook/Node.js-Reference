var extfs = require('extfs');

extfs.remove('/tmp/dirs', function(err) {

    if (err) {
        console.error(err);
        return;
    }

    console.log('Removed');
});
