var sqlite3 = require('sqlite3');

var db = new sqlite3.Database('./mydb.db');

db.serialize(function() {
    db.run('CREATE TABLE myTable (name TEXT)');
});

db.close();
