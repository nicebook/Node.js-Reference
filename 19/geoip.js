var geoip = require('geoip-lite');

var geoInfo = geoip.lookup('54.178.137.30');

console.log(geoInfo);
