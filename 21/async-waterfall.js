var async = require('async');

async.waterfall([
    function(next) {
        console.log('First Task');
        next(null, 3000);
    }, function(interval, next) {
        setTimeout(function() {
            console.log('Second Task will take some time.');
            next();
        }, interval);
    }, function(next) {
        console.log('Third Task');
        next(null, 'This is result');
    }
], function(err, result) {
    console.log(result);
});