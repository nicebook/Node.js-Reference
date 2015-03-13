var moment = require('moment');

var FixDate = moment('2014-12-11 21:24:10.292');
console.log(FixDate.format()); 
console.log(FixDate.format('LT'));
console.log(FixDate.format('LTS'));
console.log(FixDate.format('L'));
console.log(FixDate.format('l'));
console.log(FixDate.format('LL'));
console.log(FixDate.format('ll'));
console.log(FixDate.format('LLL'));
console.log(FixDate.format('lll'));
console.log(FixDate.format('LLLL'));
console.log(FixDate.format('llll'));



