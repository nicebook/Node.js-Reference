var ssh = require('ssh');

var server = ssh.createServer({
    hostRsaKeyFile: './host_rsa',
    hostDsaKeyFile: './host_dsa'
});

server.on('connection', function(session) {

    session.on('auth', function(message) {

        return message.replyAuthSuccess();
    });

    session.on('channel', function(channel) {

        channel.on('shell', function(message) {
            message.replySuccess();

            channel.write('Welcome to My SSH Server!\n');
        });
    });
});

server.listen(3333);
