//require mongoose
const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost/customer', { useNewUrlParser: true })
  .then(() => {
    console.log(' Customer connecting Done ');
  })
  .catch(err => {
    console.log(' Err when conecting To Customer ', err);
  });


//create CustomerSchema
//full_name ,password , email, mobilenumber>>Requird 
//gender , profile_img , address>>> Not Requird
///////full_name  , email  , mobilenumber  >>>Unique

const CustomerSchema = new mongoose.Schema({
    full_name: {
        type: String,
        unique: true,
        required: true
    },
    password:{
        type: String,
        required: true,
    
    },
    email: {
        type: String,
        unique: true,
        required: true,
        unique:true
    },
      
    mobilenumber:{
        type:Number,
        required:true,
        unique:true
    },
    gender:{
        type:String,
        required:false
    },
    profile_img:{
        data: Buffer, 
        contentType: String,
        required :false
    },
   

    address :{
       type:String,
       required:false
    },
  
    date:{
        type:Date,
        default:Date.now
    }
   
    
})

//export Customer model
module.exports = Customer = mongoose.model('Customer', CustomerSchema);