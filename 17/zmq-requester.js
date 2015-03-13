var zmq = require('zmq');

var socket = zmq.socket('req');
socket.bind('tcp://127.0.0.1:12345', function(err) {
    if (err)
        console.log(err);

    socket.on('message', function(msg) {
        console.log('got reply', msg.toString());
    });

    setInterval(function() {
        socket.send('Hello');
    }, 100);
});
