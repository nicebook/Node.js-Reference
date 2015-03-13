var fs = require('fs');
var officegen = require('officegen');

var docx = officegen('docx');
var p = docx.createP();

p.options.align = 'center';
p.addText('Hi Node.js', {
	color: 'ffff00',
	bold: true,
	underline: true,
	font_face: 'Arial',
	font_size: 48
});

var output = fs.createWriteStream('output.docx');
docx.generate(output);