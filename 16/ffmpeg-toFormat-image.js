var ffmpeg = require('fluent-ffmpeg');

var tmppath = 'tmp/'
var imgdirpath = 'images/';
var imgname = 'full-white-stripe.jpg';

var imageCommand = new ffmpeg({ source: imgdirpath + imgname });  
imageCommand
	.withVideoCodec('libx264') 
	.toFormat('avi') 
	.loop(1) 
	.withSize('1920x1080') 
	.setDuration('1:00') 
	.addInputOption('-f', 'image2') 
	.addOptions(['-r 60', '-pix_fmt yuv420p']) 
	.on('error', function(err) {
		console.log('An error occurred: ' + err.message);
	})
	.on('end', function() {
		console.log('Processing finished !');
	})
	.saveToFile(tmppath + 'output.avi');