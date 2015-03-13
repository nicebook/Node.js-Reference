var sqlite3 = require('sqlite3');

var db = new sqlite3.Database('./mydb.db');

db.serialize(function() {
    var insert = db.prepare("INSERT INTO myTable VALUES (?)");

    for (var i = 0; i < 10; i++) {
        insert.run('Fred ' + i);
    }
    insert.finalize();

});

db.close();
