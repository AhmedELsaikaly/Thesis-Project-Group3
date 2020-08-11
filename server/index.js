//require technologies
const express = require("express");
const cors = require("cors");
var bodyParser = require("body-parser");
const path = require("path");
var nodemailer = require("nodemailer");
let app = express();
app.use(cors());

//const bcrypt = require("bcrypt");

//require used files

const router = require("./resources/router");
const db = require("./database/connectionDB");

app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname,"public")));
app.use(router);

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
