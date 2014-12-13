var request = require('request');

var req = request.defaults({ jar: true });

req('http://www.google.com/', function(error, response, body) {

    if (!error && response.statusCode == 200) {
        console.log(body);
    }
});
