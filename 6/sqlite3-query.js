var sqlite3 = require('sqlite3');

var db = new sqlite3.Database('./mydb.db');

db.serialize(function() {
    db.each('SELECT * FROM myTable', function(err, row) {
      console.log(row.id + ': ' + row.name);
  });
});

db.close();
