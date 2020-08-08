//require technologies
const mongoose = require("mongoose");
//..................................................
//Customer Model
let CustomerSchema = mongoose.Schema({
  fullName: {
    type: String,
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
  address: {
    type: String,
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
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
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
  area: {
    type: { type: String },
    coordinates: { type: Number },
  },
  date: {
    type: Date,
    default: Date.now,
  },
  licensePhoto: {
    type: String,
    required: true,
  },
});
const OwnerModel = mongoose.model("Owner", OwnerSchema);
//..................................................
// Facilities Schema
let FacilitySchema = mongoose.Schema({
  ownerId: {
    type: String,
  },
  facilities: {
    //////////1
    table: {
      img: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
    }, ////////////2
    SmallTents: {
      img: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
    }, /////////3
    LargeTents: {
      img: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  },
});
const FacilityModel = mongoose.model("Facility", FacilitySchema);
//..................................................
//Services Schema
let ServicesSchema = mongoose.Schema({
  ownerId: {
    type: String,
  },
  servicesAvailable: {
    PlayGround: { type: Boolean, required: true },
    SwimmingPool: { type: Boolean, required: true },
    FoodOffer: { type: Boolean, required: true },
    SoftDrinks: { type: Boolean, required: true },
    TV: { type: Boolean, required: true },
    GrillArea: { type: Boolean, required: true },
    Shesha: { type: Boolean, required: true },
    GreenArea: { type: Boolean, required: true },
    KidsArea: { type: Boolean, required: true },
  },
  otherService: {
    type: String,
    required: false,
  },
});
const ServicesModel = mongoose.model("Service", ServicesSchema);
//..................................................
//Reservation Schema
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
//..................................................
//Rating & FeedBack Schema
let RatingSchema = mongoose.Schema({
  customerId: {
    type: String,
    required: true,
  },
  ownerId: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  feedback: {
    type: String,
  },
  rating: {
    type: Number,
  },
});
const RFModel = mongoose.model("RatingFeedback", RatingSchema);
//..................................................
//export modules
module.exports = {
  CustomerModel,
  OwnerModel,
  FacilityModel,
  ServicesModel,
  ReservationModel,
  RFModel,
};
