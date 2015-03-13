var amqp = require('amqp');

var connection = amqp.createConnection({
    host: 'localhost'
});

connection.on('ready', function () {
    connection.queue('task-queue', { autoDelete: false, durable: true }, function(q) {
        q.bind('#');
        q.subscribe({ ack: true, prefetchCount: 1 }, function(message) {
            console.log(message);
            q.shift();
        });
    });
});
