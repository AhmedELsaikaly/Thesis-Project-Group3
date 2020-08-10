//require technologies
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
//require files
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
//----------------------SignIn For Owner----------------------------//
//router post request for signin
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
//............................SignUp Controller  For Owner..............................//
exports.SignUpOwner = function (req, res) {
  console.log(req.body);
  //form validation
  // const { errors, isValid } = validateSignupInput(req.body);
  // //check validation
  // if (!isValid) {
  //   return res.status(400).json(errors);
  // }
  //check Owner by email if exists
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
              .then(() => res.send("you signed up successfully"))
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
////............................Service Storing Controller  For Owner ..............................//
exports.ServicesStore = function (req, res) {
  // console.log(req.body);
  const { ownerId, otherService, servicesAvailable } = req.body;
  let ServiceDoc = new ServicesModel({
    ownerId,
    otherService,
    servicesAvailable,
  });
  ServiceDoc.save()
    .then(() => res.status(201).send("saved"))
    .catch((err) => res.status(500).send(err + "err"));
};
///// .............................................. Facilites storin Schema for owner ........................//
exports.FacilitesStore = function (req, res) {
  // console.log(req.body);
  const { ownerId, facilities } = req.body;
  let ServiceDoc = new FacilityModel({
    ownerId,
    facilities,
  });
  ServiceDoc.save()
    .then(() => res.status(201).send("FacilitesSaved"))
    .catch((err) => res.status(500).send(err + "err in Saving Facilit"));
};
//// ...................................... get one User ...............................//
exports.GetUser = function (req, res) {
  // console.log(req.params,'+++++++++')
  const UserId = req.params.id;
  CustomerModel.find({ _id: UserId })
    .then((result) => {
      res.send(result);
      console.log(result, "++++++");
    })
    .catch((err) => {
      res.send(err);
    });
};
///// ..............................................  get services  ........................//
exports.GetServices = function (req, res) {
  const ownerId = req.params.id;
  ServicesModel.find({ ownerId: ownerId })
    .then((result) => {
      if (result) {
        res.status(200).send(result);
      } else {
        res.status(200).end("there is no services for this this owners");
      }
    })
    .catch((err) => {
      console.log("Error: ", err);
    });
};
//// ...................................... get facilites ...............................//
exports.GetFacilites = function (req, res) {
  const ownerId = req.params.id;
  FacilityModel.find({ ownerId: ownerId })
    .then((result) => {
      if (result) {
        res.status(200).send(result);
      } else {
        res.status(200).end("there is no facilites for this this owners");
      }
    })
    .catch((err) => {
      console.log("Error: ", err);
    });
};
//// ...................................... get All ...............................//
exports.GetAllOwner = function (req, res) {
  OwnerModel.find({})
    .then((result) => {
      res.send(result);
      console.log(result);
    })
    .catch((err) => {
      res.send(err);
    });
};
//// ...................................... get one Owner ...............................//
exports.GetOwner = function (req, res) {
  // console.log(req.params,'+++++++++')
  const ownerId = req.params.id;
  OwnerModel.find({ _id: ownerId })
    .then((result) => {
      res.send(result);
      console.log(result, "++++++");
    })
    .catch((err) => {
      res.send(err);
    });
};

//// ...................................... get one User ...............................//
exports.GetUser = function (req, res) {
  // console.log(req.params,'+++++++++')
  const UserId = req.params.id;
  CustomerModel.find({ _id: UserId })
    .then((result) => {
      res.send(result);
      console.log(result, "++++++");
    })
    .catch((err) => {
      res.send(err);
    });
};

//// ...................................... Get All Comments ...............................//
exports.GetComments = function (req, res) {
  // console.log(req.params,'+++++++++')
  const ownerId = req.params.id;
  RFModel.find({ ownerId: ownerId })
    .then((result) => {
      res.send(result);
      console.log(result, "++++++");
    })
    .catch((err) => {
      res.send(err);
    });
};
//// ...................................... Add One Comment ...............................//
exports.AddComment = function (req, res) {
  // console.log(req.params,'+++++++++')
  const { customerId, fullName, ownerId, date, feedback, rating } = req.body;
  let CommentDoc = new RFModel({
    customerId,
    fullName,
    ownerId,
    date,
    feedback,
    rating,
  });
  CommentDoc.save()
    .then(() => res.status(201).send("Comment Saved"))
    .catch((err) => res.status(500).send(err + "err in Saving Comment"));
};
//............. add Reservation .................
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
  FacilityModel.findOne({ ownerId: ownerId })
    .then((faci) => {
      console.log("The quantity", faci.facilities[type].quantity);
      quant = faci.facilities[type].quantity;
      ReservationModel.find({
        ownerId: ownerId,
        date: date,
        type: type,
      }).then((result) => {
        console.log("11111111111111111111", result);
        console.log("22222222222222222222222", quant - result.length);
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
          res.end("no avaliliabe place");
        }
      });
    })
    .catch((err) => {
      console.log("Error: ", err);
    });
};

//..........Get Reservation For Customer............
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
/////////////////////////////  Get Bookin  For Owner  /////////////////////////////////
exports.OwnerBookings = function (req, res) {
  const ownerId = req.params.id;
  ReservationModel.find({ ownerId: ownerId })
    .then((result) => {
      console.log(result);
      if (result.length === 0) {
        console.log(result);
        return res.status(201).end("there is no booking");
      }
      return res.status(200).json({
        result: result,
        message: "This is the booking for this Owner",
      });
    })
    .catch((err) => console.log(err));
};

///////////////  Show data before  Updata Customer /////////////
exports.ShowLastDataCustomer = function (req, res) {
  const customerId = req.params.id;
  CustomerModel.findOneAndUpdate({ _id: customerId })
    .then((result) => {
      // res.render(result);
      console.log(result);
      res.status(200).send(result);
    })
    .catch((err) => res.status(200).send(err));
};

/////////// Updata Customer//////////////
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

///////////////  Show data before  Updata Owner /////////////
exports.ShowLastDataOwner = function (req, res) {
  const ownerId = req.params.id;
  OwnerModel.findOneAndUpdate({ _id: ownerId })
    .then((result) => {
      console.log(result);
      res.status(200).send(result);
    })
    .catch((err) => res.status(200).send(err));
};

/////////// Updata Owner//////////////
exports.UpdateOwner = function (req, res) {
  const ownerId = req.params.id;
  OwnerModel.findByIdAndUpdate(
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
      console.log(docs);
    }
  )
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.log(err));
};

///////////////  Show data before  Updata Facility /////////////
exports.ShowLastDataFacility = function (req, res) {
  const facilityId = req.params.id;
  FacilityModel.findOneAndUpdate({ _id: facilityId })
    .then((result) => {
      console.log(result);
      res.status(200).send(result);
    })
    .catch((err) => res.status(200).send(err));
};

///////// Updata Facility//////////////
exports.UpdateFacility = function (req, res) {
  const facilityId = req.params.id;
  FacilityModel.findByIdAndUpdate(
    { _id: facilityId },
    {
      facilities: {
        table: {
          img: req.body.img,
          price: req.body.price,
          quantity: req.body.quantity,
        },
        SmallTents: {
          img: req.body.img,
          price: req.body.price,
          quantity: req.body.quantity,
        },
        LargeTents: {
          img: req.body.img,
          price: req.body.price,
          quantity: req.body.quantity,
        },
      },
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

///////////////  Show data before  Updata Services /////////////
exports.ShowLastDataServices = function (req, res) {
  const servicesId = req.params.id;
  ServicesModel.findOneAndUpdate({ _id: servicesId })
    .then((result) => {
      console.log(result);
      res.status(200).send(result);
    })
    .catch((err) => res.status(200).send(err));
};

/////////// Updata Services//////////////
exports.UpdateServices = function (req, res) {
  const servicesId = req.params.id;
  ServicesModel.findByIdAndUpdate(
    { _id: servicesId },
    {
      servicesAvailable: {
        PlayGround: req.body.PlayGround,
        SwimmingPool: req.body.SwimmingPool,
        FoodOffer: req.body.FoodOffer,
        SoftDrinks: req.body.SoftDrinks,
        TV: req.body.TV,
        GrillArea: req.body.GrillArea,
        Shesha: req.body.Shesha,
        GreenArea: req.body.GreenArea,
        KidsArea: req.body.KidsArea,
      },
      otherService: req.body.otherService,
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
