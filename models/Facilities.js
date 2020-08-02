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
            their_number:{
                type:Number,
                required:true
            },
            capacity:{
                type:Number,
                required:true
            }
        },////////////2
        tents_samll:{
            img:{
                data: Buffer, 
                contentType: String,
                required :true  
            },
            price :{
                type:Number,
                required:true
            },
            their_number:{
                type:Number,
                required:true
            },
            capacity:{
                type:Number,
                required:true
            }
        },/////////3
        tents_large:{
            img:{
                data: Buffer, 
                contentType: String,
                required :true  
            },
            price :{
                type:Number,
                required:true
            },
            their_number:{
                type:Number,
                required:true
            },
            capacity:{
                type:Number,
                required:true
            }
        },

   
   }
   
   

  })

  module.exports = Facil = mongoose.model('Facil', FacilSchema);