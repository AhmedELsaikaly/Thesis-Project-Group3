//require mongoose
const mongoose = require("mongoose");

// mongoose
//   .connect('mongodb://localhost/customer', { useNewUrlParser: true })
//   .then(() => {
//     console.log(' Customer connecting Done ');
//   })
//   .catch(err => {
//     console.log(' Err when conecting To Customer ', err);
//   });

const CustomerSchema = new mongoose.Schema({
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

//export Customer model
const Customer = mongoose.model("Customer", CustomerSchema);
module.exports = Customer;
