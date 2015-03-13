var fs = require('fs');
var archiver = require('archiver');

var output = fs.createWriteStream('output.zip');
output.on('close', function() {
    console.log('Done');
});

var archive = archiver('zip');
archive.on('error', function(err) {
    throw err;
});

archive.pipe(output);

archive.bulk([
    { expand: true, cwd: 'dir/', src: ['*.txt'] }
]);

archive.finalize();
