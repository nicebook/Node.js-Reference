var express = require('express');

var app = express();
var userAPI = express.Router();

userAPI.get('/signout', function(req, res) {
    res.send('Sign out');
});

userAPI.post('/signin', function(req, res) {
    res.send('Sign In');
});

app.use('/apis/user', userAPI);

app.listen(3000);
