const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    firstName:{
        type : String , 
        require : [ true , "your name"],
    },
    lastName:{
        type : String , 
        require : [ true , "your last name"],
    },
    userName:{
        type : String , 
        require : [ true , "please add your last name"],
    },
    email:{
        type : String , 
        require : [ true , "please add your last name"],
    },
    phoneNumber:{
        type : Number , 
        require : [ true , "your phone number"],
    },
    password:{
        type : String,
        require : [ true , "your passwprd"],
    }
},
{
    timestamps : true ,
});
module.exports = mongoose.model("User" , userSchema);