var Image = require('image-ninja');

var dirpath = 'images/';
var imgname = 'download-logo.png';
var tmppath = 'tmp/'

var image = new Image(dirpath + imgname); 
image
	.format('jpg') 
	.save(tmppath + 'output.jpg')
	.then(function (newImage) {
		console.log('Done.'); 
	});