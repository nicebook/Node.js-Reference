var fs = require('fs');

fs.appendFile('./appendfile.txt', 'Hello World', function(err) {

    if (err) {
        console.error(err);
        return;
    }

    console.log('Appended');
});
