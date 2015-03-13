var pg = require('pg');
var uri = 'postgres://fred:12345678@localhost/mydb';

pg.connect(uri, function(err, client, done) {
    if (err) {
        return console.error('error fetching client from pool', err);
    }

    client.query('SELECT * FROM mytable', function(err, result) {
        done();
        if (err) {
            return console.error('error running query', err);
        }
        console.log(result.rows[0]);
    });
});
