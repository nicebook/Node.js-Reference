var moment = require('moment');

var FixDate = moment('2014-12-11 21:24:10.292');

console.log(FixDate.toJSON());

var JsonObj = JSON.stringify({
    postDate : FixDate.toJSON();
}); 
console.log(JsonObj);

JsonObj = JSON.stringify({
    postDate : FixDate.format();
}); 
console.log(JsonObj);



