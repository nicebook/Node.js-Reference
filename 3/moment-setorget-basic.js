var moment = require('moment');

var days = moment().set('days', 2); 
console.log(days.format()); 
console.log(days.get('days')); 
