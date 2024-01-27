const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name :{
        type : String,
        required : true,
        trim : true
    },
    password :{
        type : String,
        required :[ true, 'Password is required'],
        trim : true
    },
    email :{
        type : String,
        required :true,
        trim : true,
        unique : true,
        lowercase : true
    }
},{timestamps : true})


const userModel  = mongoose.model('users', userSchema)


module.exports  = userModel;