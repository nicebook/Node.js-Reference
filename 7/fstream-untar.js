var tar = require('tar');
var fs = require('fs');

var source = fs.createReadStream('./dir.tar');
var extractor = tar.Extract({path: __dirname + "/extract"})

extractor.on('error', function(err) {
    console.error(err);
});

extractor.on('end', function() {
    console.log('Done');
});

source.pipe(extractor);
