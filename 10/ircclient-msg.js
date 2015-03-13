var irc = require('slate-irc');
var net = require('net');

var stream = net.connect({
    port: 6667,
    host: 'irc.freenode.org'
});

var client = irc(stream);

client.pass('pass');
client.nick('Fred');
client.user('Fred', 'Fred Chien');
client.join('#nodejs');
client.on('message', function(e) {
    if (e.to != '#nodejs')
        return;
    console.log(e.from + ': ' + e.message);
});
