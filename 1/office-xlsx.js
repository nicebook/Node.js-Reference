var fs = require('fs');
var officegen = require('officegen');

var xlsx = officegen('xlsx');
xlsx.name = 'My excel document';

var sheet = xlsx.makeNewSheet();
sheet.data[10] = [];
sheet.data[10][2] = 'Hello';
sheet.setCell('G8', 'Node.js!');

var output = fs.createWriteStream('output.xlsx');
xlsx.generate(output);