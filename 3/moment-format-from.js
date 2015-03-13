var moment = require('moment');

var start = moment([2014, 11, 11]);
var end   = moment([2014, 11, 12]);
console.log(end.from(start));
console.log(end.from([2014, 11, 11])); 
console.log(end.from(new Date(2014, 11, 11))); 
console.log(end.from("2014-12-11"));
console.log(end.from(start, true)); 



