var net = require('net');
var dgram = require('dgram');

function now() {
    return new Buffer(new Date().toUTCString() + '\r\n');
}

var tcpServer = net.createServer(function(client) {

    client.write(now());
    client.end();
});
tcpServer.listen(13);

var udpServer = dgram.createSocket('udp4', function(msg, rinfo) {

    var ts = now();
    udpServer.send(ts, 0, ts.length, rinfo.port, rinfo.address);
});

udpServer.bind(13);
