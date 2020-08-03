const mongoose = require("mongoose");

const RatingSchema = new mongoose.Schema({
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
const RatingFeedback = mongoose.model("RatingFeedback", RatingSchema);
module.exports = RatingFeedback;
