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
  nodemailer.createTestAccount((err,accunt)=>{
    const htmlEmail = `
    <h3>Contact </h3>
    <ul>
    <li>Name:${req.body.name}</li>
    <li>Email:${req.body.email}</li>
    </ul>
    <h3>Contact </h3>
    <p>Message:${req.body.message}</p>
    `
    let transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'mara.ziemann89@ethereal.email',///
        pass: '16ycvUbMt1JQ7KTkwa'
    }
    });
    let mailOptions ={
      from:req.body.email,
      to:"mara.ziemann89@ethereal.email",
      replyTo:req.body.email,
      subject:"Contact us",
      text:req.body.message,
      html:htmlEmail

    }
    transporter.sendMail(mailOptions,(err,info)=>{
      if(err){
        return console.log(err);
      }
      console.log(info.message);
    })

  })
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
