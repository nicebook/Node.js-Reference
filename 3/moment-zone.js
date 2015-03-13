var moment = require('moment');

console.log(moment().zone());
console.log(moment().zone(-8).format());
console.log(moment().zone(-480).format());
console.log(moment().zone('+08:00').format());
console.log(moment().zone('2014-12-11T21:24:10+08:00').format());
