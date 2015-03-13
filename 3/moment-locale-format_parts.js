var moment = require('moment');

var FixDate = moment('2014-12-11 21:24:10.292');
console.log(FixDate.format()); 
console.log(FixDate.format('dddd, MMMM Do YYYY, h:mm:ss a'));
console.log(FixDate.format('ddd, hA'));
console.log(FixDate.locale('zh-tw').format('YYYY/MMM/DD ddd, A h:mm:ssZ '));

