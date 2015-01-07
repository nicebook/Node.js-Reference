var fs = require('fs');

fs.writeFile('./writefile.txt', 'Hello World', function(err) {

    if (err) {
        console.error(err);
        return;
    }

    console.log('Wrote');
});
