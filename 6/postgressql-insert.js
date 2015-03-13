var pg = require('pg');
var uri = 'postgres://fred:12345678@localhost/mydb';

pg.connect(uri, function(err, client, done) {
    if (err) {
        return console.error('error fetching client from pool', err);
    }
	
	var sqlStr = 'INSERT INTO myTable (name, date) VALUES ($1, $2)';
	client.query(sqlStr, [ 'Fred', new Date() ], function(err, result) {
		done();
	});
});
