var fs = require('fs');

var files = fs.readdirSync('/etc'); 

for (var index in files) {
    console.log(files[index]);
}
