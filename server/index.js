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

/// circleCi  => test each push
// cont deployment

// validation for info on signup and login. Search for good module
// handle errors and render to the user

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// app.use(express.static(path.resolve(__dirname + "client", "build")));
// app.use(
//   express.static(path.join(__dirname, "..", "client", "public", "index.html"))
// );
// //require modules (express,body-parser,path,cors,mongoose)
// const express = require("express");
// const bodyParser = require("body-parser");
// const path = require("path");
// const cors = require("cors"); //node module to allow requests from server to server (from react server to backend server)
// const mongoose = require("mongoose");

// // require models
// var Customer = require("./models/CustomerModel");
// var Owner = require("./models/OwnerModel");
// var RatingAndfeedbace = require("./models/RatinandFeedback");
// var Reservation = require("./models/Reservations");
// var Services = require("./models/Services");
// var Facilities = require("./models/Facilities");

// //require routes
// const users = require("./routes/api/users");
// const owners = require("./routes/api/owners");

// //db config mongoURI
// const db = require("./database/config").mongoURI;

// //invoke express
// const app = express();
// // app.use("/", express.static(path.join(__dirname, "/client/build")));

// //using modules (express,body-parser,path,cors,mongoose)
// app.use(cors());
// app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// app.use(express.static("build"));

// // connection to database
// mongoose
//   .connect(db, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("connected to database successfully"))
//   .catch((err) => console.log("Error in connecting to database", err));

// //using routers
// app.use("/api", users);
// app.get("/", (req, res) => {
//   res.send("Backend server for Raha app");
// });
