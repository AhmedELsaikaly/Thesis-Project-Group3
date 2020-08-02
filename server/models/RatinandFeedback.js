const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost/ratingfeedback', { useNewUrlParser: true })
  .then(() => {
    console.log(' Rating && Feedback connecting Done ');
  })
  .catch(err => {
    console.log(' Err when conecting To Rating && Feedback ', err);
  });
  const RatingSchema = new mongoose.Schema({
    customerId:{
        type:String
    },
   
    date:{
        type:Date,
        default:Date.now
    },
    
    feedback:{
        type:String,
        required:false
    },
    rating:{
        type:Number,
        required:false
    },
    placeName:{
        type:String
    }

  })

  module.exports = RatingFeedback = mongoose.model('RatingFeedback', RatingSchema);