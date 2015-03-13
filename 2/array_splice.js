var name = [ 'Fred', 'Wesley', 'Chuck' ];

name.splice(1, 1);

for (var index in name) {
    console.log(name[index]);
}
