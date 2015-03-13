var tar = require('tar');
var fstream = require('fstream');
var fs = require('fs');

var output = fs.createWriteStream('dir.tar');
var packer = tar.Pack({ noProprietary: true });

packer.on('error', function(err) {
    console.error(err);
});

packer.on('end', function() {
    console.log('Done');
});

var dir = fstream.Reader({ path: './dir', type: 'Directory' });
dir.on('error', function(err) {
    console.error(err);
});

dir
    .pipe(packer)
    .pipe(output);
