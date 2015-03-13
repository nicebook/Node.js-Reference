var events = require('events');

var stateMachine = new events.EventEmitter();

stateMachine.on('task1', function() {
    console.log('Task 1');
});

stateMachine.on('task2', function() {
    console.log('Task 2');
});

stateMachine.emit('task1');
stateMachine.emit('task2');