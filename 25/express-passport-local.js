var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({ 
	extended: false 
}));

var users = [
	{ id: 1, username: 'example', password: 'examples', email: 'example@mandice.com' },
	{ id: 2, username: 'Fred', password: 'examples', email: 'fred@mandice.com' },
	{ id: 3, username: 'Wesley', password: 'examples', email: 'wesley@mandice.com' },
	{ id: 4, username: 'Kevin', password: 'examples', email: 'chuck@mandice.com' }
];

passport.use(new LocalStrategy(
	function(username, password, done) {
		var index = 0; 
		var total = users.length;
		for (index ; index < total; index++) {
			var user = users[index];
			if (user.username === username) {
				if (user.password != password) { 
					return done(null, false, { message: 'Invalid password' }); 
				}
				return done(null, user.email);
			}
		}
	}
));

app.post('/login', function(req, res) {
	passport.authenticate('local', function(err, user, info) {
		if (err) {
			res.send('Respond with a err.');
		}

		if (!user) {
			res.send('Respond with a info.');
		}
		
		res.send('Respond with a E-mail: ' + user);
	})(req, res);
});

app.get('/', function(req, res) {
    res.send('Hello World!');
})

var server = app.listen(3000, function() {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Listening at http://%s:%s', host, port);
});

