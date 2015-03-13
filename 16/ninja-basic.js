var Image = require('image-ninja');

var dirpath = 'images/';
var imgname = 'download-logo.png';
var tmppath = 'tmp/'

var image = new Image(dirpath + imgname); 

image
	.width(1000) 
	.height(1000) 
	.save(tmppath + imgname) 
	.then(function (newImage) { 
		console.log('Done.'); 
	});