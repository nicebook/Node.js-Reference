var cheerio = require('cheerio');

var html = '<ul id=\"fruits\">' +
	'<li class=\"apple\">Apple</li>' +
	'<li class=\"orange\">Orange</li>' +
	'<li class=\"pear\">Pear</li>' +
	'</ul>';

var $ = cheerio.load(html);

console.log($('li.apple').text());
