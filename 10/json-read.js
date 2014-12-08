var fs = require('fs');

fs.readFile('./sample.json', 'utf8', function (err, data) {

    if (err)
        throw err;

    var obj = JSON.parse(data);

    console.dir(obj);
});
