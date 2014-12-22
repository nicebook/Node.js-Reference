var upnpServer = require('upnpserver');

var server = new upnpServer({
	name: 'My UPnP Server'
}, [
   '/Users/fred/Pictures'
]);

server.start();
