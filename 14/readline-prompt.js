var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    completer: function(line) {
        var completions = 'hello quit'.split(' ');
        var hits = completions.filter(function(c) {
            return c.indexOf(line) == 0;
        })

        // show all completions if none found
        return [ hits.length ? hits : completions, line ];
    }
});

rl.on('line', function(cmd) {
    switch(cmd) {
    case 'hello':
        console.log('Helloo!');
        break;

    case 'quit':
        rl.close();
        return;
    }

	rl.prompt();
});

rl.prompt();
