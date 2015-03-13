var events = require('events');

var workflow  = new events.EventEmitter();

workflow.on('task1', function() {
    console.log('Task 1');
    this.emit('task2');
});

workflow.on('task2', function() {
    console.log('Task 2');
    workflow.emit('task1');
});

workflow.emit('task1');