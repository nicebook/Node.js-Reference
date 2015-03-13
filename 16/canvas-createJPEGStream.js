var Canvas = require('canvas');
var fs = require('fs');

var canvas = new Canvas(640, 480, 'svg');
var context = canvas.getContext('2d');
context.beginPath();
context.arc(100, 100, 50, 0, 2 * Math.PI, true);
context.fillStyle = '#ff0000';
context.fill();
var output = fs.createWriteStream('output.jpg');
var stream = canvas.createJPEGStream();
stream.pipe(output);