var async = require('async');

var myArr = [ 'Fred', 'Wesley', 'Chuck', 'Charles' ];

async.each(myArr, function(element, complete) {
    console.log('Processing ' + element);
    complete();
}, function(err) {
    console.log('Completed!');
});