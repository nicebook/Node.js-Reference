var fs = require('fs');
var FTP = require('ftp');

var client = new FTP();

client.on('ready', function() {

    client.list(function(err, list) {

        if (err)
            throw err;

        client.get(list[1].name, function(err, stream) {

            if (err)
                throw err;

            var output = fs.createWriteStream(list[1].name);

            stream.pipe(output);

            stream.on('close', function() {

                client.end();
            });
        });
    });
});

client.connect({
    host: 'ftp.speed.hinet.net',
    user: 'ftp',
    password: 'ftp'
});
