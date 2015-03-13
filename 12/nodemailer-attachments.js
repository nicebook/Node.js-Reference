var nodemailer = require('nodemailer');
 
var transporter = nodemailer.createTransport({ 

	service: 'Gmail',  
	auth: {
		user: 'example@mandice.com',  
		pass: 'mypasswd' 
	}
});

var mailOptions = {
	from: 'example@mandice.com', 
	to: 'wesley@mandice.com',   
	subject: 'nodemailer test', 
	text: 'Send message from nodemailer!', 
	html: '<b>Send message from nodemailer!</b>' 
	attachments: [
		{	
			filename: 'text1.txt',
			content: 'nodemailer test!'
		},
		{	
			filename: 'text2.txt',
			content: new Buffer('nodemailer test!','utf-8')
		},
		{	
			filename: 'text3.txt',
			path: 'nodemailer.txt'
		},
		{	
			path: 'nodemailer.txt'
		},
		{	
			filename: 'text4.txt',
			content: fs.createReadStream('nodemailer.txt')
		},
		{	
			filename: 'text.bin',
			content: 'nodemailer test!',
			contentType: 'text/plain'
		},
		{	
			filename: 'README.txt',
			path: 'https://raw.githubusercontent.com/examplegit/Examples-Node.js_20140424/master/README.md'
		},
		{	
			filename: 'text5.txt',
			content: 'aGVsbG8gd29ybGQh',
			encoding: 'base64'
		},
		{	
			path: 'data:text/plain;base64,aGVsbG8gd29ybGQ='
		}
	]     	
};

transporter.sendMail(mailOptions, function(error, info){
	if(error){
		console.log(error);
	}else{
		console.log('Message sent: ' + info.response);
	}
});
