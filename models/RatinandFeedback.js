const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost/ratinfeedback', { useNewUrlParser: true })
  .then(() => {
    console.log(' Ratin && Feedback connecting Done ');
  })
  .catch(err => {
    console.log(' Err when conecting To Ratin && Feedback ', err);
  });
  const RatinSchema = new mongoose.Schema({
    customer_id:{
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
    place_name:{
        type:String
    }

  })

  module.exports = RatingFeedback = mongoose.model('RatingFeedback', RatinSchema);