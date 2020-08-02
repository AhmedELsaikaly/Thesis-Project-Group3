//require mongoose
const mongoose = require('mongoose');

//create CustomerSchema
const CustomerSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },

    password:{
        type: String,
        required: true,
        password:String
    },
})

//export Customer model
module.exports = Customer = mongoose.model('Customer', CustomerSchema);