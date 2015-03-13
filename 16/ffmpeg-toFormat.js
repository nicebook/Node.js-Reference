var ffmpeg = require('fluent-ffmpeg');

var videoname = 'output.avi'; 
var tmppath = 'tmp/'; 
var Command = new ffmpeg({ source: tmppath + videoname }); 

Command
	.fromFormat('avi') 
	.withVideoCodec('libx264') 
	.toFormat('mp4') 
	.on('error', function(err) {
		console.log('An error occurred: ' + err.message);
	})
	.on('end', function() { 
		console.log('Processing finished !');
	})
	.saveToFile(tmppath + 'output.mp4')     