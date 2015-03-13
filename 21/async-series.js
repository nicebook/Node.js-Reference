var async = require('async');

async.series([
    function(next) {
        console.log('First Task');
        next();
    }, function(next) {
        setTimeout(function() {
            console.log('Second Task will take 1 second.');
            next();
        }, 1000);
    }, function(next) {
        console.log('Third Task');
        next();
    }
], function(err) {
    console.log('Done');
});