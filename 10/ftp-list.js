var FTP = require('ftp');

var client = new FTP();
 
client.on('ready', function() {

    client.list(function(err, list) {

        if (err)
            throw err;

        console.log(list);

        client.end();
    });
});

client.connect({
    host: 'ftp.speed.hinet.net',
    user: 'ftp',
    password: 'ftp'
});
