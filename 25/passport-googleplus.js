var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var express = require('express');

var cookieSession = require('cookie-session');
var app = express();

app.use(cookieSession({keys: ['asdfghjkl!@#$%ASDFGHJ']}))
app.use(passport.initialize());
app.use(passport.session());

var GOOGLE_CLIENT_ID = '4838******';
var GOOGLE_CLIENT_SECRET = 'rXDv******';

passport.serializeUser(function(user, done) {
	done(null, user);
});

passport.deserializeUser(function(obj, done) {
	done(null, obj);
});

passport.use(new GoogleStrategy({
		clientID: GOOGLE_CLIENT_ID,
		clientSecret: GOOGLE_CLIENT_SECRET,
		callbackURL: 'http://localhost/auth/google/oauth2callback'
	},
	
	function(accessToken, refreshToken, profile, done) {
		return done(null, profile);	
	}
));

app.get('/auth/Error', function(req, res) {
    res.send('Login Fail!');
})

app.get('/auth/google', 
	passport.authenticate('google', { 
		scope: [
			'https://www.googleapis.com/auth/userinfo.profile',
			'https://www.googleapis.com/auth/userinfo.email'
		] 
	})
);

app.get('/auth/google/oauth2callback', 
	passport.authenticate('google', { 
		failureRedirect: '/auth/Error'
	}),
	function(req, res) {
		res.send('UserName: ' + req.user.name.givenName + ', eMail: ' + req.user.emails[0].value);
	}
);

app.get('/auth/logout', function(req, res){
	req.logout();
	res.send('Logout!');
});

app.all('/*', function(req, res) {
    res.redirect('index.html');
});

var server = app.listen(80, function() {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Listening at http://%s:%s', host, port);
});

