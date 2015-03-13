var zmq = require('zmq');

var producer = zmq.socket('push');

producer.bindSync('tcp://localhost:3000');

setInterval(function() {
    producer.send('New Work!');
}, 1000);