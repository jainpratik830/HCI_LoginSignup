const nodemailer = require("nodemailer");
const mg = require('nodemailer-mailgun-transport');
const smtpTransport = require('nodemailer-smtp-transport');


const auth = {
	auth: {
	  api_key: '6eeef295e58a1a425bf9b6d56b615b1e-c250c684-895dc977',
	  domain: 'sandboxea9d462869b04b14921eecac7423ea6a.mailgun.org'
	}
  }

module.exports = async (email, subject, text) => {
	try {

		// const nodemailerMailgun = nodemailer.createTransport(mg(auth));

		const nodemailerMailgun = nodemailer.createTransport(smtpTransport({
			service: 'gmail',
			host: 'smtp.gmail.com',
			auth: {
			  user: 'btechproject2022@gmail.com',
			  pass: 'Btechproject2022!'
			}
		  }));

		// const transporter = nodemailer.createTransport({
		// 	host: process.env.HOST,
		// 	service: process.env.SERVICE,
		// 	// port: Number(process.env.EMAIL_PORT),
		// 	// secure: Boolean(process.env.SECURE),
		// 	auth: {
		// 		user: process.env.USER,
		// 		pass: process.env.PASS,
		// 	},
		// });
		// subject= JSON.stringify(subject);
		// text= JSON.stringify(text);
		await nodemailerMailgun.sendMail({
			from: "btechproject2022@gmail.com",
			to: email,
			subject: subject,
			text: text,
		});


		// await nodemailerMailgun.sendMail({
		// 	from: 'myemail@example.com',
		// 	to: email, // An array if you have multiple recipients.
		// 	subject: 'Hey you, awesome!',
		// 	'h:Reply-To': 'reply2this@company.com',
		// 	//You can use "html:" to send HTML email content. It's magic!
		// 	html: '<b>Wow Big powerful letters</b>',
		// 	//You can use "text:" to send plain-text content. It's oldschool!
		// 	text: 'Mailgun rocks, pow pow!'
		//   }, (err, info) => {
		// 	if (err) {
		// 	  console.log(`Error: ${err}`);
		// 	}
		// 	else {
		// 	  console.log(`Response: ${info}`);
		// 	}
		//   });

		console.log("email sent successfully");
	} catch (error) {
		console.log("email not sent!");
		console.log(error);
		return error;
	}
};
