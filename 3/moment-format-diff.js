var moment = require('moment');

var start = moment([2014, 11, 11]);
var end   = moment([2014, 11, 12]);
console.log(end.diff(start));
console.log(end.diff([2014, 11, 11])); 
console.log(end.diff(new Date(2014, 11, 11))); 
console.log(end.diff('2014-12-11'));
console.log(end.diff(start, 'milliseconds', true)); 



