var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'fred',
    password: 'fred1234'
});

connection.connect(function(err) {

    if (err)
        throw err;

    var sql = 'SELECT * FROM myTable WHERE name = ? AND age = ?';
    var params = [ 'Fred', 29 ];
    connection.query(sql, params, function(err, rows) {

        if (err)
            throw err;

        console.log(rows);

        connection.end();
    });
});
