var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var express = require('express');

var cookieSession = require('cookie-session');
var app = express();
app.use(cookieSession({keys: ['asdfghjkl!@#$%ASDFGHJ']}))
app.use(passport.initialize());
app.use(passport.session());

var FACEBOOK_APP_ID = '15********';
var FACEBOOK_APP_SECRET = '*********';

passport.serializeUser(function(user, done) {
	done(null, user);
});

passport.deserializeUser(function(obj, done) {
	done(null, obj);
});

passport.use(new FacebookStrategy({
		clientID: FACEBOOK_APP_ID,
		clientSecret: FACEBOOK_APP_SECRET,
		callbackURL: "http://localhost/auth/facebook/oauth2callback"
	},
	function(accessToken, refreshToken, profile, done) {
		return done(null, profile);	
	}
));

app.get('/auth/Error', function(req, res) {
    res.send('Login Fail!');
})

app.get('/auth/facebook', 
	passport.authenticate('facebook')
);

app.get('/auth/facebook/oauth2callback', 
	passport.authenticate('facebook', { 
		failureRedirect: '/auth/Error'
	}),
	function(req, res) {
		res.send('UserName: ' + req.user.name.givenName + ', eMail: ' + req.user.emails[0].value);
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

