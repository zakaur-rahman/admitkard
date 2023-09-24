const mongoose = require('mongoose')

const phoneSchema = new mongoose.Schema({
    phone: {
        type: String,
        required:true,
        unique: true
    },
    otp:{
        type : Number ,
        require:true
    }
},{timestamps:true});

module.exports =  mongoose.model('phone', phoneSchema);
