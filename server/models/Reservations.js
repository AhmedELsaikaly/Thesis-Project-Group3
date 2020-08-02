const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost/reservation', { useNewUrlParser: true })
  .then(() => {
    console.log(' Reservation connecting Done ');
  })
  .catch(err => {
    console.log(' Err when conecting To Reservation ', err);
  });
  const ReservSchema = new mongoose.Schema({
    customerId:{
        type:String
    },
    date:{
        type:Date,
        default:Date.now
    },
    status:{
        type:Boolean
    },
    mobileNumber:{
        type:Number
    },
    typeReserv:{
        type:Array
    },

    totalPrice:{
        type:Number
    },
    placeName:{
        type:String
    },
    numberOfperson :{
        type:Number,
        required:true
    }

  })

  module.exports = Reserv = mongoose.model('Reserv', ReservSchema);