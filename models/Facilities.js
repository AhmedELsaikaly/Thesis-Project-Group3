const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost/facilities', { useNewUrlParser: true })
  .then(() => {
    console.log(' Facilities connecting Done ');
  })
  .catch(err => {
    console.log(' Err when conecting To Facilities ', err);
  });
  const FacilSchema = new mongoose.Schema({
    owner_id:{
        type:String
    },
    facilities_name:{
        table:{type:Number , required:true},
        tents_samll:{type:Number , required: true},
        tents_large:{type:Number , required: true},

   
   }
   
   

  })

  module.exports = Facil = mongoose.model('Facil', FacilSchema);