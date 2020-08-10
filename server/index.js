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
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,"public")));
app.use(router);

app.post("/form", (req, res)=> {
  console.log(req.body)
  main(req.body.email,req.body.name,req.body.message)
  async function main(email, name, message) {
    let testAccount = await nodemailer.createTestAccount();
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "ra77a99@gmail.com", // generated ethereal user
        pass: "ra7a123456", // generated ethereal password
      },
    });
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Contact us" <ra77a99@gmail.com>', // sender address
      to: "ra77a99@gmail.com", // list of receivers
      subject: "Contact Us", // Subject line
      text: message, // plain text body
      html: `<b>Hello ${name}and email : ${email} Wellcome to ra7a App </b><p>${message}</p>`, // html body
    });
    console.log("Message sent: %s", info.messageId);
       console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  }

})



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
