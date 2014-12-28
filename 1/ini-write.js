var fs = require('fs');
var ini = require('ini');

var config = {
	general: {
		name: 'Fred'
	},
	contact: {
		email: 'cfsghost@gmail.com',
		phone: [
			'09X2345678',
			'09Y3456789'
		]
	}
};

fs.writeFile('./saved.ini', ini.stringify(config), function(err) {
	if (err)
		console.log('Failed to write.');
	else
		console.log('Saved successfully');
});
