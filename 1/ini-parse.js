var fs = require('fs');
var ini = require('ini');

fs.readFile('./example.ini', 'utf-8', function(err, data) {
    var config = ini.parse(data);

    console.log(config.general.name);
    console.log(config.contact.phone[0]);
});
