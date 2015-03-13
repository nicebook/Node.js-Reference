var express = require('express');
var cookieSession = require('cookie-session');

var app = express();

app.set('trust proxy', 1);

app.use(cookieSession({keys: ['asdfghjkl!@#$%ASDFGHJ']}))

app.get('/', function(req, res) {

    var n = req.session.count || 0;
    req.session.count = ++n
 
    res.send('Count:' + req.session.count); 
});

app.listen(3000);
