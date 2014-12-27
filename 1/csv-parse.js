var fs = require('fs');
var csv = require('csv-parser');

fs.createReadStream('example.csv')
	.pipe(csv())
	.on('data', function(data) {
		console.log(data);
	});
