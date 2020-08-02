//require modules (express,bcryptjs,jwt,Router)
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();

//require keys (cluster mongoDB)
const keys = require("../../config/keys");

//require signup and signin validation
const validateSignupInput = require("../../validation/signup");
const validateSigninInput = require("../../validation/login");

// require models
var Customer = require("../../models/CustomerModel");
var Owner = require("../../models/OwnerModel");

//----------------------SignIn and SignUp----------------------------//
//router post request for signin
router.post("/signin", (req, res) => {
  //form validation
  const { errors, isValid } = validateSigninInput(req.body);
  //check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const email = req.body.email;
  const password = req.body.password;
  //find Customer by email
  Customer.findOne({ email }).then((customer) => {
    //check if customer exists
    if (!customer) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }
    //check password
    bcrypt.compare(password, customer.password).then((isMatch) => {
      if (isMatch) {
        // Customer matched
        // Create JWT Payload
        const payload = {
          id: customer.id,
          name: customer.name,
        };
        // Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 2629746, // 1 month in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: token,
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password incorrect" });
      }
    });
  });
});

//router post request for signup
router.post("/signup", (req, res) => {
  //form validation
  const { errors, isValid } = validateSignupInput(req.body);
  //check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  //check Customer by email if exists
  Customer.findOne({ email: req.body.email }).then((customer) => {
    if (customer) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      //create newCustomer
      const newCustomer = new Customer({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });
      // Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newCustomer.password, salt, (err, hash) => {
          if (err) throw err;
          newCustomer.password = hash;
          //save newCustomer
          newCustomer
            .save()
            .then((customer) => res.json(customer))
            .catch((err) => console.log(err));
        });
      });
    }
  });
});
//-------------------------------------------------------

//router get request for finding all Customers
router.get("/customers", function (req, res) {
  Customer.find({})
    .then((data) => {
      console.log("Request to get data: success");
      res.send(data);
    })
    .catch((err) => console.log("Error in gettin data", err));
});
//-------------------------------------------------------
//router get request for searching for customer by name
router.get("/customers/:name", function (req, res) {
  var name = req.params.name;
  Customer.find({ name: name })
    .then((data) => {
      if (data.length !== 0) {
        console.log(`found Customer ${name}`, data);
        res.send(data);
      } else {
        res.send("No such Customer");
      }
    })
    .catch((err) => console.log(`Error in finding Customer ${name}`, err));
});

//---------------------------------------

//router delete request for searching for customer by name
router.delete("/customers/:name", function (req, res) {
  var name = req.params.name;
  Customer.remove({ name: name })
    .then((result) => {
      console.log(`delete Customer ${name}`);
      res.sendStatus(202);
      res.send(`Customer ${name} deleted `, result);
    })
    .catch((err) =>
      console.log(`Error in deleting Customer ${name} from database`, err)
    );
});

//export router module
module.exports = router;
