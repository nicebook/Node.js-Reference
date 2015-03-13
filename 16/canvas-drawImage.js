var Canvas = require('canvas');
var fs = require('fs');

var canvas = new Canvas(640, 480, 'svg');
var context = canvas.getContext('2d');
var image = new Canvas.Image();
image.src = fs.readFileSync('test.png');
context.drawImage(image, 100, 100, image.width, image.height);
fs.writeFile('output.svg', canvas.toBuffer());