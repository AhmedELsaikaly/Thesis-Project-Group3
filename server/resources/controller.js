//require technologies
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//require files
const {
  CustomerModel,
  OwnerModel,
  FacilityModel,
  ServicesModel,
  ReservationModel,
  RFModel,
} = require("./models.js");
const validateSignupInput = require("./validation/signup");
const validateSigninInput = require("./validation/login");

//----------------------SignIn For Owner----------------------------//
//router post request for signin
exports.SignInOwner = function (req, res) {
  //form validation
  const { errors, isValid } = validateSigninInput(req.body);
  //check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const email = req.body.email;
  const password = req.body.password;
  //find Owner by email
  OwnerModel.findOne({ email })
    .then((owner) => {
      //check if owner exists
      if (!owner) {
        return res.status(404).json({ emailnotfound: "Email not found" });
      }
      //check password
      bcrypt
        .compare(password, owner.password)
        .then((isMatch) => {
          if (isMatch) {
            // Owner matched
            // Create JWT Payload
            const payload = {
              id: owner.id,
              fullName: owner.fullName,
            };
            // Sign token
            jwt.sign(
              payload,
              process.env.SECRET_KEY,
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
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
};

//............................SignUp Controller  For Owner..............................//
exports.SignUpOwner = function (req, res) {
  console.log(req.body);
  //form validation
  const { errors, isValid } = validateSignupInput(req.body);
  //check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  //check Owner by email if exists
  OwnerModel.findOne({ email: req.body.email })
    .then((owner) => {
      if (owner) {
        return res.status(400).json({ email: "Email already exists" });
      } else {
        //create newOwner
        const newOwner = new OwnerModel({
          fullName: req.body.fullName,
          password: req.body.password,
          email: req.body.email,
          facebook: req.body.facebook,
          mobileNumber: req.body.mobileNumber,
          placeName: req.body.placeName,
          location: req.body.location,
          area: req.body.area,
          photoLicense: req.body.photoLicense,
        });
        // Hash password before saving in database
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newOwner.password, salt, (err, hash) => {
            if (err) throw err;
            newOwner.password = hash;
            //save newOwner
            newOwner
              .save()
              .then((owner) => res.json(owner))
              .catch((err) =>
                res.status(500).json({
                  error: err,
                })
              );
          });
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
};
//-------------------------------------------------------------------------------------
//----------------------SignIn For Custmer ----------------------------//
//router post request for signin
process.env.SECRET_KEY = "secret";
exports.SignInCustomer = function (req, res) {
  //form validation
  const { errors, isValid } = validateSigninInput(req.body);
  //check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const email = req.body.email;
  const password = req.body.password;
  //find customer by email
  CustomerModel.findOne({ email })
    .then((customer) => {
      //check if customer exists
      if (!customer) {
        return res.status(404).json("Email not found");
      }
      //check password
      bcrypt
        .compare(password, customer.password)
        .then((isMatch) => {
          if (isMatch) {
            // customer matched
            // Create JWT Payload
            const payload = {
              id: customer.id,
              fullName: customer.fullName,
            };
            // Sign token
            jwt.sign(
              payload,
              process.env.SECRET_KEY,
              {
                expiresIn: "1h", // 1 h
              },
              (err, token) => {
                res.json({
                  success: true,
                  token: token,
                });
              }
            );
          } else {
            return res.status(400).json("Password incorrect");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
};

//............................SignUp Controller  For Costmer ..............................//
exports.SignUpCustomer = function (req, res) {
  console.log(req.body);
  //form validation
  // const { errors, isValid } = validateSignupInput(req.body);
  // //check validation
  // if (!isValid) {
  //   return res.status(400).json(errors);
  // }
  //check Customer by email if exists
  CustomerModel.findOne({ email: req.body.email })
    .then((customer) => {
      if (customer) {
        return res.status(400).json("Email already exists");
      } else {
        //create newCustomer
        const newCustomer = new CustomerModel({
          fullName: req.body.fullName,
          password: req.body.password,
          email: req.body.email,
          mobileNumber: req.body.mobileNumber,
          address: req.body.address,
        });
        // Hash password before saving in database
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newCustomer.password, salt, (err, hash) => {
            if (err) throw err;
            newCustomer.password = hash;
            //save newCustomer
            newCustomer
              .save()
              .then(() => res.send("you signed up successfully"))
              .catch((err) => console.log(err));
          });
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
//-------------------------------------------------------------------------------------
//
