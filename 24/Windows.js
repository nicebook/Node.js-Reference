var Service = require('node-windows').Service;

var svc = new Service({
    name: 'Hello World',
    description: 'The nodejs.org example web server.',
    script: 'C:\\path\\to\\helloworld.js'
});

svc.on('install',function() {
    svc.start();
});

svc.install();