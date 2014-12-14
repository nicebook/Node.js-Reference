var FTP = require('ftp');

var client = new FTP();
 
client.on('ready', function() {
    console.log('Connected');

    client.end();
});

client.connect({
    host: 'ftp.speed.hinet.net',
    user: 'ftp',
    password: 'ftp'
});
