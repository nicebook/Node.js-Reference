var xmpp = require('node-xmpp-server');

var server = xmpp.C2SServer({
    port: 5222,
    domain: 'localhost'
});

server.on('connect', function(client) {

    client.on('online', function() {
    });

    client.on('disconnect', function() {
    });
});
