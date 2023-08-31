const mongoose= require('mongoose');

const userSchema= mongoose.Schema({
    
    name:String,
    email:String,
    password:String,
    address:{
        type:String,
        default:"abc nyc",
        required:true
    }
});

const userModel= mongoose.model("userModel",userSchema);

module.exports = {userModel};