var xml2js = require('xml2js');

var xml = '<root>Hello xml2js!</root>';

xml2js.parseString(xml, function (err, result) {
    console.dir(result);
});
