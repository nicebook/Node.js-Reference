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
};

transporter.sendMail(mailOptions, function(error, info){
	if(error){
		console.log(error);
	}else{
		console.log('Message sent: ' + info.response);
	}
});
