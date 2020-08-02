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
   servicesAvailable:{
    greenArea:{type:Boolean ,required:true},
    babySwimming:{type:Boolean ,required:true},
    resturant:{type:Boolean ,required:true},
    softDrinks:{type:Boolean ,required:true},
    lineBarbecue:{type:Boolean ,required:true},
    volleyballCourt:{type:Boolean ,required:true},
    conditioning:{type:Boolean ,required:true}
   }
   
   

  })

  module.exports = Service = mongoose.model('Service', ServicesSchema);