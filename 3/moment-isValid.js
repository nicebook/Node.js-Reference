var moment = require('moment');

console.log(moment("2014-12-11 4:30",       "YYYY-MM-DD HH:mm").isValid());   
console.log(moment("2014-12-11 4:30 +0800", "YYYY-MM-DD HH:mm Z").isValid()); 
console.log(moment("2014-12-11 4:30AM",     "YYYY-MM-DD HH:mmA").isValid()); 
console.log(moment("2014 13",               "YYYY MM").isValid());
console.log(moment("2014 11 31",            "YYYY MM DD").isValid());
console.log(moment("2014 2 29",             "YYYY MM DD").isValid());
console.log(moment("2014 notamonth 29",     "YYYY MMM DD").isValid());


