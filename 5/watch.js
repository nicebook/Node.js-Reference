var fs = require('fs');

fs.watch('/tmp', function(event, filename) {
   console.log(event, filename);
});
