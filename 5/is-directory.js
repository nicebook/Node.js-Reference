var fs = require('fs');

fs.stat('/tmp', function(err, stats) {

    if (err) {
        console.error(err);
        return;
    }

    console.log(stats.isDirectory());
});
