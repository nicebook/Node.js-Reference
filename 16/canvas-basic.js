var Canvas = require('canvas');
var fs = require('fs');

var canvas = new Canvas(640, 480, 'svg');
var context = canvas.getContext('2d');
context.beginPath();
context.rect(0, 0, 640, 480);
context.fillStyle = '#ff0000';
context.fill();
fs.writeFile('output.svg', canvas.toBuffer());