var request = require('request');

request.post({
	url: 'http://specificweb/login',
	form: {
		username: 'fred',
		password: 'fred1234'
	}
}, function(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
});
