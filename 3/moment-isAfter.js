var moment = require('moment');

console.log(moment('2014-11-11').isAfter('2014-11-15'));
console.log(moment('2014-11-11').isAfter('2014-11-15', 'year'));
console.log(moment('2015-11-11').isAfter('2014-11-15', 'year'));