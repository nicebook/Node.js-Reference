var I18N = require('i18n-2');

var i18n = new I18N({
	locales: [ 'en', 'zh-TW' ]
});

i18n.setLocale('zh-TW');

console.log(i18n.__('Hello!'));
