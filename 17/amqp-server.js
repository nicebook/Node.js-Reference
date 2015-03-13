var amqp = require('amqp');

var connection = amqp.createConnection({
    host: 'localhost'
});

connection.on('ready', function () {
    connection.queue('task-queue', { autoDelete: false, durable: true }, function(q) {
        connection.publish('task-queue', 'Hello', { deliveryMode: 2 });
    });
});