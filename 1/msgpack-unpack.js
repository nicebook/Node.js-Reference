var msgpack = require('msgpack');

var myObj = {
	name: 'Fred',
	email: 'cfsghost@gmail.com'
};

var packedObj = msgpack.pack(myObj);

var rawObj = msgpack.unpack(packedObj);

console.log(rawObj);
