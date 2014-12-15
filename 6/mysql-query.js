var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'fred',
    password: 'fred1234'
});


connection.connect(function(err) {

    if (err)
        throw err;

    var sql = 'SELECT * FROM myTable';
    connection.query(sql, function(err, rows, fields) {

        if (err)
            throw err;


        console.log(rows);

        connection.end();
    });
});
