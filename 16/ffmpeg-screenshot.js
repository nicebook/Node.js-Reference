var ffmpeg = require('fluent-ffmpeg');

var videoname = 'output.avi'; 
var tmppath = 'tmp/'; 
var Command = new ffmpeg({ source: tmppath + videoname }); 

Command
	.withSize('100%') 
	.on('error', function(err) {
		console.log('An error occurred: ' + err.message);
	})
	.on('end', function(filenames) {
		console.log('Successfully generated ' + filenames.join(', '));
	})
	.takeScreenshots(
		{
			count: 3, 
			timemarks: [ '0.5', '1', '50%' ], 
			filename: 'thumbnail-%b-%i-%ss' 
		},
		tmppath 
	);  