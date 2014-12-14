var express = require('express');
var app = express();

app.post('/', function(req, res) {

    console.log(req.body);

    res.send(JSON.stringify(req.body));
});

app.listen(3000);
