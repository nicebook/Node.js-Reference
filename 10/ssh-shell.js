var ssh = require('ssh');
var pty = require('pty.js');

var server = ssh.createServer({
    hostRsaKeyFile: './host_rsa',
    hostDsaKeyFile: './host_dsa'
});

server.on('connection', function(session) {

    session.on('auth', function(message) {

        if (message.subtype == 'password'
            && message.authUser == 'fred'
            && message.authPassword =='fred1234') {

            return message.replyAuthSuccess();
        }

        message.replyDefault();
    });

    session.on('channel', function(channel) {

        channel.on('shell', function(message) {
            message.replySuccess();

            var term = pty.spawn('bash', [], {
                name: 'linux',
                cwd: process.env.HOME,
                env: process.env
            });

            term.on('exit', function() {
                channel.close();
            });

            channel.pipe(term);
            term.pipe(channel);

        });
    });
});

server.listen(3333);
