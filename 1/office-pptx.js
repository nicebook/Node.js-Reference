var fs = require('fs');
var officegen = require('officegen');

var pptx = officegen('pptx');
pptx.setDocTitle('Using Node.js to Generate PPTX');

var slide = pptx.makeNewSlide();
slide.back = '000000';
slide.color = 'ffffff';

slide.addText('Hi Node.js', {
	x: 'c',
	y: 'c',
	cx: 600,
	cy: 200,
	color: 'ffff00',
	bold: true,
	underline: true,
	font_face: 'Arial',
	font_size: 48
});

var output = fs.createWriteStream('output.pptx');
pptx.generate(output);