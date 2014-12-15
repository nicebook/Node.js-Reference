var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'fred',
    password: 'fred1234'
});

connection.connect();

connection.end();
