const mongoose = require("mongoose");

const ReservSchema = new mongoose.Schema({
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

const Reserv = mongoose.model("Reserv", ReservSchema);
module.exports = Reserv;
