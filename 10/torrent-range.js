var fs = require('fs');
var torrentStream = require('torrent-stream');

var engine = torrentStream('magnet:?xt=urn:btih:4d753474429d817b80ff9e0c441ca660ec5d2450&dn=Ubuntu+14.04+64+bit&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80&tr=udp%3A%2F%2Ftracker.publicbt.com%3A80&tr=udp%3A%2F%2Ftracker.istole.it%3A6969&tr=udp%3A%2F%2Fopen.demonii.com%3A1337');

engine.on('ready', function() {
    engine.files.forEach(function(file) {
        console.log('filename:', file.name);
        var stream = file.createReadStream({
            start: 5000,
            end: 10000
		});
        var output = fs.createWriteStream('ubuntu.iso');
		stream.pipe(output);
    });
});
