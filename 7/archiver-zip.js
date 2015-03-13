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

archive
    .append(fs.createReadStream('./dir/test1.txt'), { name: 'file1.txt' })
    .append(fs.createReadStream('./dir/test2.txt'), { name: 'file2.txt' })
    .finalize();
