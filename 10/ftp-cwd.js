var FTP = require('ftp');

var client = new FTP();
 
client.on('ready', function() {

    client.cwd('uploads', function(err) {

        if (err)
            throw err;

        console.log('Changed');

        client.end();
    });
});

client.connect({
    host: 'ftp.speed.hinet.net',
    user: 'ftp',
    password: 'ftp'
});
