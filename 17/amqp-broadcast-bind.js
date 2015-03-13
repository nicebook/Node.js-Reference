var amqp = require('amqp');

var connection = amqp.createConnection({
    host: 'localhost'
});

connection.on('ready', function () {
    connection.exchange('broadcast', { type: 'fanout', autoDelete: false },
        function(exchange) {
        connection.queue('tmp-' + Math.random, { exclusive: true }, function(q) {
            q.bind(exchange, '');
            q.subscribe(function(message) {
                console.log(message);
            });

        });
    });
});