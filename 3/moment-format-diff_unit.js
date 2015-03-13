var moment = require('moment');

var start = moment([1985, 10, 15]);
var end  = moment([2014, 11, 11]);
console.log(end.diff(start, 'years'));
console.log(end.diff(start, 'months'));
console.log(end.diff(start, 'weeks'));
console.log(end.diff(start, 'days'));
console.log(end.diff(start, 'hours'));
console.log(end.diff(start, 'minutes'));
console.log(end.diff(start, 'seconds'));




