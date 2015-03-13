var months = ['1月', '2月' , '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
var weekdays = ['星期日', '星期一' , '星期二', '星期三', '星期四', '星期五', '星期六'];
console.log(' 現在是' + new Date().getFullYear() + ' 年' + months[new Date().getMonth()] + new Date().getDate() + '日' + weekdays[new Date().getDay()] );