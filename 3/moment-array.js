var moment = require('moment');

var day = moment([2014, 11, 11, 15, 25, 50, 125]);
console.log(day.format());   

day = moment([2014]);
console.log(day.format());

day = moment([2014, 11]);     
console.log(day.format());

day = moment([2014, 11, 11]); 
console.log(day.format());

day = moment.utc([2014, 11, 11, 15, 25, 50, 125]);
console.log(day.format()); 





