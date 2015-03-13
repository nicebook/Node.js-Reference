var Canvas = require('canvas');
var fs = require('fs');

var canvas = new Canvas(640, 480, 'svg');
var context = canvas.getContext('2d');
context.beginPath();
context.arc(100, 100, 50, 0, Math.PI, true);
context.strokeStyle = '#ff0000';
context.stroke();
fs.writeFile('output.svg', canvas.toBuffer());