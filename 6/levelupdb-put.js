var levelup = require('levelup');

var db = levelup('mydb.db');

db.put('name', 'Fred', function(err) {
    if (err) {
        console.log('Failed');
        return;
    }
});
