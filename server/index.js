//require modules (express,body-parser,path,cors,mongoose)
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors"); //node module to allow requests from server to server (from react server to backend server)
const mongoose = require("mongoose");

//require models
// var Customer = require("./models/CustomerModel");
// var Owner = require("./models/OwnerModel");

//require routes
const users = require("./routes/api/users");

//db config mongoURI
const db = require("./config/keys").mongoURI;

//invoke express
const app = express();
// app.use("/", express.static(path.join(__dirname, "/client/build")));

//using modules (express,body-parser,path,cors,mongoose)
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("build"));

// connection to database
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to database successfully"))
  .catch((err) => console.log("Error in connecting to database", err));

//herokuapp config. using static files presented after the build
if (process.env.NODE_ENV === "production") {
  app.use(express.static("build"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "build", "index.html"));
  });
}

//using routers
app.use("/api", users);
app.get("/", (req, res) => {
  res.send("Backend server for Raha app");
});

//declare port
var port = process.env.PORT || 6001;

//listen to the port
app.listen(port, function () {
  console.log(`listening to port ${port}!`);
});
