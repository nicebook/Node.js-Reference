var pg = require('pg');
var uri = 'postgres://fred:12345678@localhost/mydb';

pg.connect(uri, function(err, client, done) {
    if (err) {
        return console.error('error fetching client from pool', err);
    }
	
	var sqlStr = 'SELECT * FROM myTable WHERE name = $1';

	client.query(sqlStr, [ 'Fred' ], function(err, result) {
		done();
	});
});
