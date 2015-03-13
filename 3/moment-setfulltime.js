var moment = require('moment');

console.log(moment("2014-12-11T21").format()); 
console.log(moment("2014-12-11 21").format()); 
console.log(moment("2014-12-11 21:24").format()); 
console.log(moment("2014-12-11 21:24:10.292").format()); 
console.log(moment("2014-12-11 24:00:00.000").format()); 
