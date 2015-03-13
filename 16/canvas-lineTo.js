var Canvas = require('canvas');
var fs = require('fs');

var canvas = new Canvas(640, 480, 'svg');
var context = canvas.getContext('2d');
context.beginPath();
context.moveTo(100, 100);
context.lineTo(200, 200);
context.strokeStyle = '#ff0000';
context.stroke();
fs.writeFile('output.svg', canvas.toBuffer());