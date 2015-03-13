var moment = require('moment');

console.log(moment("2014-12-11 4:30",       "YYYY-MM-DD HH:mm"));  
console.log(moment("2014-12-11 4:30 +0800", "YYYY-MM-DD HH:mm Z")); 
console.log(moment("2014-12-11 4:30AM",     "YYYY-MM-DD HH:mmA")); 

