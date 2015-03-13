var zmq = require('zmq');

var socket = zmq.socket('sub');
socket.connect('tcp://127.0.0.1:2001');

socket.subscribe('ALERT');
socket.on('message', function(data) {
    console.log(data.toString());
});