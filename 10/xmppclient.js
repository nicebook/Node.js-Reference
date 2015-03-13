var Client = require('node-xmpp-client');

var client = new Client({
    jid: 'fred@localhost',
    password: 'fred1234'
});

client.on('online', function() {
    console.log('Connected');
});

client.on('stanza', function(stanza) {
    console.log(stanza);
});
