var koa = require('koa');

var app = koa();

app.use(function *() {

    this.body = 'My First Koa Web';
});

app.listen(3000);
