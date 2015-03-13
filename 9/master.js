var child_process = require('child_process');

var child = child_process.fork('./child.js');

child.on('close', function (code) {

    console.log('child process exited with code ' + code);
});
