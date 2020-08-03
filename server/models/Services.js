const mongoose = require("mongoose");

const ServicesSchema = new mongoose.Schema({
  owner_id: {
    type: String,
  },
  servicesAvailable: {
    greenArea: { type: Boolean, required: true },
    babySwimming: { type: Boolean, required: true },
    resturant: { type: Boolean, required: true },
    softDrinks: { type: Boolean, required: true },
    lineBarbecue: { type: Boolean, required: true },
    volleyballCourt: { type: Boolean, required: true },
    conditioning: { type: Boolean, required: true },
  },
  addNote:{
    type:String,
    required:false
  }
  
});

const Service = mongoose.model("Service", ServicesSchema);
module.exports = Service;
