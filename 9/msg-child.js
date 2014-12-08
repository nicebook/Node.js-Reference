process.on('message', function(msg) {
    console.log('[child] Received: ', msg);
    process.send('Got a Message');
});
