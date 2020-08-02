//require mongoose
const mongoose = require('mongoose');

//create OwnerSchema
const OwnerSchema = new mongoose.Schema({
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
        required: true
    },
})

//export Owner model
module.exports = Owner = mongoose.model('Owner', OwnerSchema);