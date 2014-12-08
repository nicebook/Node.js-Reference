var child_process = require('child_process');

var child = child_process.fork('./msg-child.js');

child.on('message', function(msg) {
    console.log('[master] Received: ', msg);
});

child.on('close', function (code) {
    console.log('child process exited with code ' + code);
});

child.send('Hey!');
