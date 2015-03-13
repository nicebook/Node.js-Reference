var levelup = require('levelup');

var db = levelup('mydb.db');

db.get('name', function(err, value) {
    if (err) {
        console.log('Failed');
        return;
    }

    console.log(value);
});
