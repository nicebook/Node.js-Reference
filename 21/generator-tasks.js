function* foo() {
    console.log('one');
    yield

    console.log('two');
    yield

    console.log('three');
}

var f = foo();
f.next();

f.next();

f.next()
