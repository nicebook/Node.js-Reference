var fs = require('fs');
var xml2js = require('xml2js');

var xml = fs.readFileSync('example.xml');

xml2js.parseString(xml, function (err, result) {
    console.dir(result);
    console.dir(result.products.item);
});
