var fs = require('fs');

var stream = fs.createReadStream('./readfile-stream.js');

stream.on('data', function(data) {
    console.log(data.toString());
});
