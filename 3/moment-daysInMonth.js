var moment = require('moment');

console.log(moment("2012-02", "YYYY-MM").daysInMonth());
console.log(moment("2014-02", "YYYY-MM").daysInMonth());
console.log(moment("2014-12", "YYYY-MM").daysInMonth());

