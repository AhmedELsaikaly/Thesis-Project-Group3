const express = require("express");
let app = express();
const router = require("./resources/router");
const cors = require("cors");
const db = require("./database/connectionDB");
var bodyParser = require("body-parser");
const path = require("path");
//const bcrypt = require("bcrypt");
app.use(cors());

/// circleCi  => test each push
// cont deployment

// validation for info on signup and login. Search for good module
// handle errors and render to the user

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// app.use(express.static(path.resolve(__dirname + "client", "build")));

app.use(express.json())
//take the data of the book that i seach about it and put in favorit list
app.use(router);

// app.get('/', (req, res) => {
//   res.send('works!')
// })

var port = 5000;

//herokuapp config. using static files presented after the build
if (process.env.NODE_ENV === "production") {
  app.use(express.static("build"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "build", "index.html"));
  });
}
/// TODO:  authentication verrification/ check for token in every req for every user
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});


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

// //declare port
// var port = process.env.PORT || 6001;

// //listen to the port
// app.listen(port, function () {
//   console.log(`listening to port ${port}!`);
// });
