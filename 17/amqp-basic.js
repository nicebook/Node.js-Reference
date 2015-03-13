var amqp = require('amqp');

var connection = amqp.createConnection({
    host: 'localhost'
});

connection.on('ready', function () {
    connection.queue('my-queue', function(q) {
        q.bind('#');
        q.subscribe(function(message) {
            console.log(message);
        });
    });
});