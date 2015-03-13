var moment = require('moment');

var day = moment({ hour:15, minute:10 });
console.log(day.format());
day = moment({ y    :2014, M     :11, d   :11, h    :15, m      :10, s      :3, ms          :123});
console.log(day.format());
day = moment({ year :2014, month :11, day :11, hour :15, minute :10, second :3, millisecond :123});
console.log(day.format());
day = moment({ years:2014, months:11, days:11, hours:15, minutes:10, seconds:3, milliseconds:123});
console.log(day.format());
day = moment({ years:2014, months:11, date:11, hours:15, minutes:10, seconds:3, milliseconds:123});
console.log(day.format());




