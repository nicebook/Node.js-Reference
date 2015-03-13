var zmq = require('zmq');

var worker = zmq.socket('pull');
worker.connect('tcp://localhost:3000');

worker.on('message', function(data) {
    console.log(data.toString());
}, 1000);