var xmpp = require('node-xmpp-server');

var server = xmpp.C2SServer({
    port: 5222,
    domain: 'localhost'
});

server.on('connect', function(client) {

    client.on('authentication', function(opt, function() {

        if (opt.jid == 'fred' && opt.password == 'fred1234')
            return callback(null, opts);

        callback(false);
    }));

    client.on('online', function() {
        console.log('New Client');
    });

    client.on('disconnect', function() {
        console.log('Disconnected');
    });
});
