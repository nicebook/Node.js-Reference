var Service = require('node-mac').Service;

var svc = new Service({
    name: 'Hello World',
    description: 'The nodejs.org example web server.',
    script: '/path/to/helloworld.js'
});

svc.on('install',function() {
    svc.start();
});

svc.install();