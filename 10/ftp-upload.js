var FTP = require('ftp');

var client = new FTP();
 
client.on('ready', function() {

    client.cwd('uploads', function(err) {

        if (err)
            throw err;

        client.put('ftp-upload.js', 'ftp-upload-dest.js', function(err) {

            if (err)
                throw err;

            client.end();
        });
    });
});

client.connect({
    host: 'ftp.speed.hinet.net',
    user: 'ftp',
    password: 'ftp'
});
