var amqp = require('amqp');

var connection = amqp.createConnection({
    host: 'localhost'
});

connection.on('ready', function () {
    connection.exchange('broadcast', { type: 'fanout', autoDelete: false },
        function(exchange) {
        exchange.publish('', 'Hello');
    });
});