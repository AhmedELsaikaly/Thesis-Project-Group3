const mongoose = require("mongoose");
//............................
//Customer Model
let CustomerSchema = mongoose.Schema({
  fullName: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },

  mobileNumber: {
    type: Number,
    required: true,
    unique: true,
  },
  gender: {
    type: String,
    required: false,
  },
  profileImg: {
    data: Buffer,
    contentType: String,
    required: false,
  },

  address: {
    type: String,
    required: false,
  },

  date: {
    type: Date,
    default: Date.now,
  },
});
let CustomerModel = mongoose.model("customer", CustomerSchema);
//..................................................
//Owner Schema
let OwnerSchema = mongoose.Schema({
  fullName: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  facebook: {
    type: String,
    required: true,
    unique: true,
  },

  mobileNumber: {
    type: Number,
    required: true,
    unique: true,
  },
  placeName: {
    type: String,
    required: true,
    unique: true,
  },

  location: {
    type: String,
    required: true,
  },
  area: {
    type: { type: String },
    coordinates: { type: Number },
  },
  date: {
    type: Date,
    default: Date.now,
  },
  photoLicense: {
    data: Buffer,
    contentType: String,
  },
});
const OwnerModel = mongoose.model("Owner", OwnerSchema);

// //......................................................................
// // Facilities Schema
let FacilitySchema = mongoose.Schema({
  ownerId: {
    type: String,
  },
  facilitiesName: {
    //////////1
    table: {
      img: {
        data: Buffer,
        contentType: String,
      },
      price: {
        type: Number,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      capacity: {
        type: Number,
        required: true,
      },
    }, ////////////2
    tentsSamll: {
      img: {
        data: Buffer,
        contentType: String,
      },
      price: {
        type: Number,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      capacity: {
        type: Number,
        required: true,
      },
    }, /////////3
    tentsLarge: {
      img: {
        data: Buffer,
        contentType: String,
      },
      price: {
        type: Number,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      capacity: {
        type: Number,
        required: true,
      },
    },
  },
});
const FacilityModel = mongoose.model("Facility", FacilitySchema);
// ////..............................................................................
// //Services Schema
let ServicesSchema = mongoose.Schema({
  owner_id: {
    type: String,
  },
  servicesAvailable: {
    greenArea: { type: Boolean, required: true },
    babySwimming: { type: Boolean, required: true },
    resturant: { type: Boolean, required: true },
    softDrinks: { type: Boolean, required: true },
    lineBarbecue: { type: Boolean, required: true },
    volleyballCourt: { type: Boolean, required: true },
    conditioning: { type: Boolean, required: true },
  },
  addNote: {
    type: String,
    required: false,
  },
});

const ServicesModel = mongoose.model("Service", ServicesSchema);
// //////.............................................................................
// // Reservation Schema
let ReservationSchema = mongoose.Schema({
  customerId: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: Boolean,
  },
  mobileNumber: {
    type: Number,
  },
  typeReserv: {
    type: Array,
  },

  totalPrice: {
    type: Number,
  },
  placeName: {
    type: String,
  },
  numberOfperson: {
    type: Number,
    required: true,
  },
});

const ReservationModel = mongoose.model("Reserv", ReservationSchema);

// //// ....................................................
// // Rating & FeedBack Schema

let RatingSchema = mongoose.Schema({
  customerId: {
    type: String,
  },

  date: {
    type: Date,
    default: Date.now,
  },

  feedback: {
    type: String,
    required: false,
  },
  rating: {
    type: Number,
    required: false,
  },
  placeName: {
    type: String,
  },
});
const RFModel = mongoose.model("RatingFeedback", RatingSchema);

module.exports = {
  CustomerModel,
  OwnerModel,
  FacilityModel,
  ServicesModel,
  ReservationModel,
  RFModel,
};
