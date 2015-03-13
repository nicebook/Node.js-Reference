var passport = require('passport');
var GitHubStrategy = require('passport-github2').Strategy;
var express = require('express');

var cookieSession = require('cookie-session');
var app = express();

app.use(cookieSession({keys: ['asdfghjkl!@#$%ASDFGHJ']}))
app.use(passport.initialize());
app.use(passport.session());
var GITHUB_CLIENT_ID = '57******';
var GITHUB_CLIENT_SECRET = '4b9f********';

passport.serializeUser(function(user, done) {
	done(null, user);
});

passport.deserializeUser(function(obj, done) {
	done(null, obj);
});

passport.use(new GitHubStrategy({
		clientID: GITHUB_CLIENT_ID,
		clientSecret: GITHUB_CLIENT_SECRET,
		callbackURL: "http://localhost/auth/github/oauth2callback"
	},
	function(accessToken, refreshToken, profile, done) {
		return done(null, profile);	
	}
));

app.get('/auth/Error', function(req, res) {
    res.send('Login Fail!');
})

app.get('/auth/github', 
	passport.authenticate('github', { 
		scope: [
			'user'
		] 
	})
);

app.get('/auth/github/oauth2callback', 
	passport.authenticate('github', { 
		failureRedirect: '/auth/Error'
	}),
	
	function(req, res) {
		res.send('UserName: ' + req.user.username + ', eMail: ' + req.user.emails[0].value);
	}
);

app.get('/auth/logout', function(req, res){
	req.logOut();
	res.send('Logout!');
});

app.all('/*', function(req, res) {
    res.send('Default Page!');
});

var server = app.listen(80, function() {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Listening at http://%s:%s', host, port);
});

