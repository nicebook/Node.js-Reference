var ffmpeg = require('fluent-ffmpeg');

var dirpath = 'video/';  
var tmppath = 'tmp/'; 
var audio = 'testaudio-one.wav';
var videoname = 'output.avi'; 
var Command = new ffmpeg({ source: tmppath + videoname }); 

Command
	.fromFormat('avi') 
	.withVideoCodec('libx264') 
	.withAudioCodec('libmp3lame') 
	.addInput(dirpath + audio) 
	.toFormat('mp4') 
	.on('error', function(err) {
		console.log('An error occurred: ' + err.message);
	})
	.on('end', function() { 
		console.log('Processing finished !');
	})
	.saveToFile(tmppath + 'output_audio.mp4');    