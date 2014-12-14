var fs = require('fs');

fs.readFile('./readfile.js', function(err, data) {

    if (err) {
        console.error(err);
        return;
    }

    console.log(data.toString());
});
