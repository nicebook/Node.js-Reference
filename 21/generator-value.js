function* foo() {
    var x = yield 0;

    x++;

    yield x;
}

var f = foo();

var first = f.next();
console.log(first.value);

var second = f.next(first.value);
console.log(second.value);
