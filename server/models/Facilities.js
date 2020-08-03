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
    ownerId:{
        type:String
    },
    facilitiesName:{
        //////////1
        table:{
            img:{
                data: Buffer, 
                contentType: String,
                required :true  
            },
            price :{
                type:Number,
                required:true
            },
            quantity:{
                type:Number,
                required:true
            },
            capacity:{
                type:Number,
                required:true
            }
        },////////////2
        tentsSamll:{
            img:{
                data: Buffer, 
                contentType: String,
                required :true  
            },
            price :{
                type:Number,
                required:true
            },
            quantity:{
                type:Number,
                required:true
            },
            capacity:{
                type:Number,
                required:true
            }
        },/////////3
        tentsLarge:{
            img:{
                data: Buffer, 
                contentType: String,
                required :true  
            },
            price :{
                type:Number,
                required:true
            },
            quantity:{
                type:Number,
                required:true
            },
            capacity:{
                type:Number,
                required:true
            }
        },

   
   }}
   )


module.exports = Facility = mongoose.model('Facility', FacilSchema);