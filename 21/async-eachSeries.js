var async = require('async');

var myArr = [ 'A', 'B', 'C', 'D' ];

async.eachSeries(myArr, function(element, complete) {
    console.log('Processing ' + element);
    complete();
}, function(err) {
    console.log('Completed!');
});