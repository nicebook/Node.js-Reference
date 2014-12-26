var I18n = require('i18n-2');

var i18n = new I18n({
	locales: [ 'en', 'zh-tw' ]
});

i18n.setLocale('zh-tw');

console.log(i18n.__('Hello!'));
