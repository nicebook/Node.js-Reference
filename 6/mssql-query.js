var sql = require('mssql');

var conn = new sql.Connection({
    user: 'fred',
    password: '12345678',
    server: 'localhost',
    database: 'mydb'
}, function(err) {

    if (err) {
        console.log(err);
        return
    }

    var req = new sql.Request(conn);
    req.query('SELECT * FROM myTable', function(err, rs) {
        if (err) {
            return;
        }

        console.dir(rs);
    });
});
