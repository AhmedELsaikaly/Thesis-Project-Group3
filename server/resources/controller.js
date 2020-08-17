//require technologies
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const stripe = require("stripe")(
  "sk_test_51HFEs6Ey67T81IS2h074yJxZRh0P2vlQZT0kEOEarNqerFw7MrSvvQoMe1y6cnMBLJ0vHZpaHdIyEztbGp0obR5A00t6fUTPdf"
);

//require used files
const ReservationModel = require("./models.js").ReservationModel;
const {
  CustomerModel,
  OwnerModel,
  FacilityModel,
  ServicesModel,

  RFModel,
} = require("./models.js");
const validateSignupInput = require("./validation/signup");
const validateSigninInput = require("./validation/login");

//SignIn For Owner

//router post request for SignInOwner
exports.SignInOwner = function (req, res) {
  console.log(req.body);
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
        return res.status(404).json("Email not found");
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
                expiresIn: "1h", // 1 month in seconds
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
//SignUpOwner Controller
exports.SignUpOwner = function (req, res) {
  console.log(req.body);
  OwnerModel.findOne({ email: req.body.email })
    .then((owner) => {
      if (owner) {
        return res.status(400).json("Email already exists");
      } else {
        //create newOwner
        const newOwner = new OwnerModel({
          fullName: req.body.fullName,
          password: req.body.password,
          email: req.body.email,
          mobileNumber: req.body.mobileNumber,
          placeName: req.body.placeName,
          area: req.body.area,
          licensePhoto: req.body.licensePhoto,
        });

        // Hash password before saving in database
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newOwner.password, salt, (err, hash) => {
            if (err) throw err;
            newOwner.password = hash;
            //save newOwner
            newOwner
              .save()
              .then(() => {
                if (
                  main(req.body.email, req.body.fullName, req.body.mobileNumber)
                ) {
                  res.send("Signed up successfully");
                } else {
                  res.send("The email not found");
                }
              })
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

//Contact Us form
async function main(email, name, phone) {
  let testAccount = await nodemailer.createTestAccount();

  //define transport object
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
    from: '"Raha App" <ra77a99@gmail.com>', // sender address
    to: email, // list of receivers
    subject: "Hello to RahaApp✔", // Subject line
    text: name, // plain text body
    html: `<b>Hello ${name} Wellcome to ra7a App </b><p>${phone}</p>`, // html body
  });

  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

//SignIn For Custmer
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
              mobileNumber: customer.mobileNumber,
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

//SignUpCustomer Controller
exports.SignUpCustomer = function (req, res) {
  console.log(req.body);
  //check Customer by email if exists
  CustomerModel.findOne({ email: req.body.email })
    .then((customer) => {
      if (customer) {
        if (main(req.body.email, req.body.fullName, req.body.mobileNumber)) {
          res.send("Signed up successfully");
        } else {
          res.send("Email not found");
          res.status(400).json("Email already exists");
        }
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
              .then(() => res.send("Signed up successfully"))
              .catch((err) => console.log(err));
          });
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

// Service Storing Controller  For Owner
exports.ServicesStore = function (req, res) {
  // console.log(req.body);
  const { ownerId, otherService, servicesAvailable } = req.body;
  ServicesModel.findOne({ ownerId: ownerId })
    .then((result) => {
      console.log(result);
      if (result === null) {
        let ServiceDoc = new ServicesModel({
          ownerId,
          otherService,
          servicesAvailable,
        });
        ServiceDoc.save()
          .then(() => res.status(201).send("Your Services saved"))
          .catch((err) => res.status(500).send(err + "err"));
      } else {
        res.end("You already have services");
      }
    })
    .catch((err) => {
      res.status(500).send(err + "err");
    });
};

//Facilites storing Controller  For Owner
exports.FacilitesStore = function (req, res) {
  // console.log(req.body);
  const { ownerId, facilities } = req.body;
  FacilityModel.findOne({ ownerId: ownerId })
    .then((result) => {
      if (result === null) {
        let FacilityDoc = new FacilityModel({
          ownerId,
          facilities,
        });
        FacilityDoc.save()
          .then(() => res.status(201).send("FacilitesSaved"))
          .catch((err) => res.status(500).send(err + "err in Saving Facilit"));
      } else {
        res.end("You already have Facilities");
      }
    })
    .catch((err) => {
      res.status(500).send(err + "err in Saving Facilit");
    });
};

//get single User function
exports.GetUser = function (req, res) {
  // console.log(req.params,'+++++++++')
  const UserId = req.params.id;
  CustomerModel.find({ _id: UserId })
    .then((result) => {
      res.send(result);
      console.log(result, "Customer found!");
    })
    .catch((err) => {
      res.send(err);
    });
};

//get services function
exports.GetServices = function (req, res) {
  const ownerId = req.params.id;
  ServicesModel.find({ ownerId: ownerId })
    .then((result) => {
      if (result.length > 0) {
        res.status(201).send(result);
      } else {
        res.status(200).end("There is no services for this this owner!");
      }
    })
    .catch((err) => {
      console.log("Error: ", err);
    });
};

//get facilites function
exports.GetFacilites = function (req, res) {
  const ownerId = req.params.id;
  FacilityModel.find({ ownerId: ownerId })
    .then((result) => {
      if (result) {
        res.status(200).send(result);
      } else {
        res.status(200).end("There is no facilites for this owner");
      }
    })
    .catch((err) => {
      console.log("Error: ", err);
    });
};

// get All owners
exports.GetAllOwner = function (req, res) {
  OwnerModel.find({})
    .then((result) => {
      console.log(result);
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

// get single Owner
exports.GetOwner = function (req, res) {
  // console.log(req.params,'+++++++++')
  const ownerId = req.params.id;
  OwnerModel.find({ _id: ownerId })
    .then((result) => {
      res.send(result);
      console.log(result, "Owner Found!");
    })
    .catch((err) => {
      res.send(err);
    });
};

// get single User
exports.GetUser = function (req, res) {
  // console.log(req.params,'+++++++++')
  const UserId = req.params.id;
  CustomerModel.find({ _id: UserId })
    .then((result) => {
      res.send(result);
      console.log(result, "Customer found!");
    })
    .catch((err) => {
      res.send(err);
    });
};

//Get All Comments
exports.GetComments = function (req, res) {
  // console.log(req.params,'+++++++++')
  const ownerId = req.params.id;
  RFModel.find({ ownerId: ownerId })
    .then((result) => {
      res.send(result);
      console.log(result, "Comments got");
    })
    .catch((err) => {
      res.send(err);
    });
};

// Add One Comment
exports.AddComment = function (req, res) {
  // console.log(req.params,'+++++++++')
  const { customerId, fullName, ownerId, date, feedback, rating } = req.body;
  OwnerModel.update(
    { _id: ownerId },
    { $inc: { ratingPeopleNo: 1, ratingSum: rating } },
    { returnOriginal: false }
  )
    .then((result) => {
      if (result.n > 0) {
        OwnerModel.findOne({ _id: ownerId })
          .then((result) => {
            const avg = Math.round(result.ratingSum / result.ratingPeopleNo);
            OwnerModel.update(
              { _id: ownerId },
              { ratingAvg: avg },
              { returnOriginal: false }
            )
              .then((result) => {
                if (result.n > 0) {
                  let CommentDoc = new RFModel({
                    customerId,
                    fullName,
                    ownerId,
                    date,
                    feedback,
                    rating,
                  });
                  CommentDoc.save()
                    .then(() => res.status(201).send("Comment Saved!"))
                    .catch((err) =>
                      res.status(500).send(err + "err in Saving Comment")
                    );
                }
              })
              .catch((err) => {
                console.log(err);
                res.send(err);
              });
          })
          .catch((err) => {
            console.log(err);
            res.send(err);
          });
      }
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
};

// add Reservation function
exports.addReservation = function (req, res) {
  var quant = 0;
  const {
    customerId,
    customerName,
    date,
    mobileNumber,
    type,
    ownerId,
  } = req.body;

  //find facilitiy using ownerId
  FacilityModel.findOne({ ownerId: ownerId })
    .then((faci) => {
      console.log("The quantity", faci.facilities[type].quantity);
      quant = faci.facilities[type].quantity;
      ReservationModel.find({
        ownerId: ownerId,
        date: date,
        type: type,
      }).then((result) => {
        if (quant - result.length > 0) {
          let ReservationDoc = new ReservationModel({
            customerId,
            customerName,
            date,
            mobileNumber,
            type,
            ownerId,
          });
          ReservationDoc.save()
            .then(() => res.status(201).send("Reservation Saved"))
            .catch((err) =>
              res.status(500).send(err + "err in Saving Reservation")
            );
        } else {
          res.end("no available place");
        }
      });
    })
    .catch((err) => {
      console.log("Error: ", err);
    });
};

//Get Reservation For Customer
exports.GetReservation = function (req, res) {
  const customerId = req.params.id;
  ReservationModel.find({ customerId: customerId })
    .then((result) => {
      console.log(result);
      if (result.length === 0) {
        console.log(result);
        return res.status(201).end("there is no booking ");
      }
      return res.status(200).send(result);
    })
    .catch((err) => console.log(err));
};
//Get Booking  For Owner
exports.OwnerBookings = function (req, res) {
  const ownerId = req.params.id;
  ReservationModel.find({ ownerId: ownerId })
    .then((result) => {
      console.log(result);
      if (result.length === 0) {
        console.log(result);
        return res.status(201).end("no booking yet");
      }
      return res.status(200).json({
        result: result,
        message: "This is the booking for this Owner",
      });
    })
    .catch((err) => console.log(err));
};

exports.OwnerBookings = function (req, res) {
  const ownerId = req.params.id;
  ReservationModel.find({ ownerId: ownerId })
    .then((result) => {
      console.log(result);
      if (result.length === 0) {
        console.log(result);
        return res.status(201).end("no booking yet");
      }
      return res.status(200).json({
        result: result,
        message: "This is the booking for this Owner",
      });
    })
    .catch((err) => console.log(err));
};
// Show data before  Updata Customer
exports.ShowLastDataCustomer = function (req, res) {
  const customerId = req.params.id;
  CustomerModel.find({ _id: customerId })
    .then((result) => {
      res.send(result);
      console.log(result, "Cusrtomer Found!");
      console.log(result, "Cusrtomer Found!");
    })
    .catch((err) => {
      res.send(err);
    });
};

// Updata Customer data
exports.UpdateCustomer = function (req, res) {
  const customerId = req.params.id;
  CustomerModel.findByIdAndUpdate(
    { _id: customerId },
    {
      fullName: req.body.fullName,
      email: req.body.email,
      mobileNumber: req.body.mobileNumber,
      address: req.body.address,
    },
    (err, docs) => {
      if (err) {
        console.log(err);
      }
      console.log(docs);
    }
  )
    .then((result) => {
      //  console.log(result)
      res.send(result);
    })
    .catch((err) => console.log(err));
};

/////////// Updata Owner//////////////
exports.UpdateOwner = function (req, res) {
  const ownerId = req.params.id;
  OwnerModel.findOneAndUpdate(
    { _id: ownerId },
    {
      fullName: req.body.fullName,
      email: req.body.email,
      mobileNumber: req.body.mobileNumber,
      placeName: req.body.placeName,
      area: req.body.area,
      licensePhoto: req.body.licensePhoto,
    },
    (err, docs) => {
      if (err) {
        console.log(err);
      }
      res.send(docs);
    }
  )
    .then((result) => {
      res.send(result);
      console.log(result);
    })
    .catch((err) => console.log(err));
};

///////////////  Show data before  Updata Facility /////////////
exports.ShowLastDataFacility = function (req, res) {
  const ownerId = req.params.id;
  FacilityModel.find({ ownerId: ownerId })
    .then((result) => {
      if (result) {
        res.status(201).json({ result: result });
      } else {
        res.status(200).json({
          result: [],
          message: "there is no facilites for this owner",
        });
      }
    })
    .catch((err) => {
      console.log("Error: ", err);
    });
};
// Updata Facility
exports.UpdateFacility = function (req, res) {
  const ownerId = req.params.id;
  // console.log(req.body.img3);
  FacilityModel.updateOne(
    { ownerId: ownerId },
    {
      $set: { facilities: req.body.facilities },
      $currentDate: { lastModified: true },
    }
  )
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.log(err));
};

// Show data before  Updata Services
exports.ShowLastDataServices = function (req, res) {
  const servicesId = req.params.id;
  ServicesModel.find({ _id: servicesId })
    .then((result) => {
      console.log(result);
      res.status(200).send(result);
    })
    .catch((err) => res.status(200).send(err));
};

// Updata Services
exports.UpdateServices = function (req, res) {
  const ownerId = req.params.id;
  console.log(req.body);
  ServicesModel.update(
    { ownerId: ownerId },
    {
      $set: {
        servicesAvailable: req.body.servicesAvailable,
        otherService: req.body.otherService,
      },
      $currentDate: { lastModified: true },
    },
    (err, docs) => {
      if (err) {
        console.log(err);
      }
      console.log(docs);
    }
  )
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.log(err));
};
//payment
//  import  uuid from UUID
exports.pay = async function (req, res) {
  console.log("Request:5555555", req.body);
  let error;
  let status;
  try {
    const { product, token } = req.body;
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });

    const charge = await stripe.charges.create({
      amount: product.price * 100,
      currency: "usd",
      customer: customer.id,
      receipt_email: token.email,
      description: `Purchased the ${product.name}`,
      shipping: {
        name: token.card.name,
        address: {
          line1: token.card.address_line1,
          line2: token.card.address_line2,
          city: token.card.address_city,
          country: token.card.address_country,
          postal_code: token.card.address_zip,
        },
      },
    });
    console.log("Charge:", { charge });
    status = "success";
  } catch (error) {
    console.error("Error:", error);
    status = "failure";
  }

  res.json({ error, status });
};

// get owner booking by date
exports.getResByDateOwner = function (req, res) {
  console.log(req.query);
  const { ownerId, date } = req.query;
  var prameters = ["table", "SmallTents", "LargeTents"];
  var obj = {};
  FacilityModel.findOne({ ownerId: ownerId })
    .then((faci) => {
      if (faci !== null) {
        for (var i = 0; i < prameters.length; i++) {
          obj[prameters[i]] = faci.facilities[prameters[i]].quantity;
        }
      } else {
        res.end("There is no facilites for this Owner");
      }
      ReservationModel.find({
        ownerId: ownerId,
        date: date,
      }).then((result) => {
        console.log(result);
        if (result.length > 0) {
          res.status(201).json({ quant: obj, reservation: result });
        } else {
          res.end("there is no reservation in this date");
        }
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};
// exports.GetReservation = function (req, res) {
//   const customerId = req.params.id;
//   ReservationModel.find({ customerId: customerId })
//     .then((reserv) => {
//       if (!reserv) {
//         console.log(reserv);
//         return res.status(404).end();
//       }
//       return res.status.send(reserv);
//     })
//     .catch((err) => next(err));
// };

//Contact Us send mail to extrnal mail
exports.ContactUs = function (req, res) {
  console.log(req.body);
  main(req.body.email, req.body.name, req.body.message);
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
      from: '"Contact us RahaApp" <ra77a99@gmail.com>', // sender address
      to: "ra77a99@gmail.com", // list of receivers
      subject: "Contact Us RahaApp", // Subject line
      text: message, // plain text body
      html: `<b>Hello ${name}and email : ${email} Wellcome to ra7a App </b><p>${message}</p>`, // html body
    });
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  }
};

//filterOwner Function
exports.filterOwner = function (req, res) {
  console.log(req.params);
  const method = req.params.method;
  const parame = req.params.id;
  var obj = {};
  obj[method] = parame;
  console.log(typeof method, typeof parame, "111111111111111");
  OwnerModel.find(obj)
    .then((result) => {
      console.log(result, "22222222222222222222");
      if (result.length > 0) {
        return res.status(201).json({ result: result });
      }
      return res
        .status(200)
        .json({ result: [], message: "there is no filter results" });
    })
    .catch((err) =>
      res.status(500).json({
        error: err,
      })
    );
};

/// exports sorted owners by rating
exports.SortedOwner = function (req, res) {
  OwnerModel.find({})
    .sort({ ratingAvg: -1 })
    .then((result) => {
      if (result.length > 0) {
        res
          .status(201)
          .json({ result: result, message: "Success Sorted Owners data " });
      } else {
        res.json({ result: [], message: "there is no Owners Tents" });
      }
    })
    .catch((err) => {
      res.send(err);
    });
};
