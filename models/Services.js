const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost/services', { useNewUrlParser: true })
  .then(() => {
    console.log(' Services connecting Done ');
  })
  .catch(err => {
    console.log(' Err when conecting To Services ', err);
  });
  const ReservSchema = new mongoose.Schema({
    owner_id:{
        type:Number
    },
   services_available:{
    green_area:{type:Boolean ,required:true},
    baby_swimming:{type:Boolean ,required:true},
    resturant:{type:Boolean ,required:true},
    drinks:{type:Boolean ,required:true},
    line_barbecue:{type:Boolean ,required:true},
    volleyball_court:{type:Boolean ,required:true},
    indoor_park:{type:Boolean ,required:true},
    conditioning:{type:Boolean ,required:true},
   }
   
   

  })

  module.exports = Reserv = mongoose.model('Reserv', ReservSchema);