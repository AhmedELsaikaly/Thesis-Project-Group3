const mongoose = require("mongoose");

const OwnerSchema = new mongoose.Schema({
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

  mobilenumber: {
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
    coordinates: [Number],
    required: true,
    unique: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  photoLicense: {
    data: Buffer,
    contentType: String,
    required: true,
    unique: true,
  },
});

//export Owner model
const Owner = mongoose.model("Owner", OwnerSchema);
module.exports = Owner;
