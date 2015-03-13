var zmq = require('zmq');

var socket = zmq.socket('pub');

socket.bind('tcp://127.0.0.1:2001', function(error) {
    setInterval(function() {
        socket.send('ALERT Hello!');
    }, 1000);
});