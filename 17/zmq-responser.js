var zmq = require('zmq');

var socket = zmq.socket('rep');
socket.connect('tcp://127.0.0.1:12345');

socket.on('message', function(msg) {
    console.log('received request:', msg.toString());
    setTimeout(function() {
        socket.send('World');
    }, 1000);
});