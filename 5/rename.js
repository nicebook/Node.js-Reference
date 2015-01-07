var fs = require('fs');

fs.rename('/tmp/test', '/tmp/test.new', function(err) {
    if (err) {
        console.error(err);
        return;
    }

    console.log('Renamed');
});
