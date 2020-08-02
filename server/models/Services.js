const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost/services', { useNewUrlParser: true })
  .then(() => {
    console.log(' Services connecting Done ');
  })
  .catch(err => {
    console.log(' Err when conecting To Services ', err);
  });
  const ServicesSchema = new mongoose.Schema({
    owner_id:{
        type:String
    },
   services_available:{
    green_area:{type:Boolean ,required:true},
    baby_swimming:{type:Boolean ,required:true},
    resturant:{type:Boolean ,required:true},
    drinks:{type:Boolean ,required:true},
    line_barbecue:{type:Boolean ,required:true},
    volleyball_court:{type:Boolean ,required:true},
    conditioning:{type:Boolean ,required:true}
   }
   
   

  })

  module.exports = Service = mongoose.model('Service', ServicesSchema);