var fs = require('fs');

fs.exists('/tmp', function(exists) {

    console.log(exists);
});
