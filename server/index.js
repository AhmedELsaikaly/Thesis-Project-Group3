//require technologies
const express = require("express");
const cors = require("cors");
var bodyParser = require("body-parser");
const path = require("path");
var nodemailer = require('nodemailer');
let app = express();
app.use(cors());

//const bcrypt = require("bcrypt");

//require used files

const router = require("./resources/router");
const db = require("./database/connectionDB");

app.use(express.json());
app.use(urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,"public")));
app.use(router);
// // app.post("/ajax/email", function(request, response) {
// 	const transporter = nodemailer.createTransport({
//     service:'gmail',
// // 		
// // 		auth: {
// 			user: "waealtaqia20152729@gmail.com", // this should be YOUR GMAIL account
// 			pass: "your_password" // this should be your password
// 		}
// 	});

// 	var textBody = `FROM: ${request.body.name} EMAIL: ${request.body.email} MESSAGE: ${request.body.message}`;
// 	var htmlBody = `<h2>Mail From Contact Form</h2><p>from: ${request.body.name} <a href="mailto:${request.body.email}">${request.body.email}</a></p><p>${request.body.message}</p>`;
// 	var mail = {
// 		from: "your_account@gmail.com", // sender address
// 		to: "your_account@gmail.com", // list of receivers (THIS COULD BE A DIFFERENT ADDRESS or ADDRESSES SEPARATED BY COMMAS)
// 		subject: "Mail From Contact Form", // Subject line
// 		text: textBody,
// 		html: htmlBody
// 	};

// 	// send mail with defined transport object
// 	transporter.sendMail(mail, function (err, info) {
// 		if(err) {
// 			console.log(err);
// 			response.json({ message: "message not sent: an error occured; check the server's console log" });
// 		}
// 		else {
// 			response.json({ message: `message sent: ${info.messageId}` });
// 		}
// 	});
// });



// app.get('/', (req, res) => {
//   res.send('works!')
// })

//declare port
var port = process.env.PORT || 5000;

//herokuapp config. using static files presented after the build
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
  });
}
/// TODO:  authentication verrification/ check for token in every req for every user
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
