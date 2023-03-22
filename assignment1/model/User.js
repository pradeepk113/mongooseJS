//require
const mongoose=require('mongoose');
//schema


const userSchema=new mongoose.Schema({
    name:{type:String,lowercase:true},
    email:String,
    age:{type:Number, default:0},
    password:{type:String, minlength:5},
    createdAt:{type:Date,default:new Date()},
    favourites:[String]
},{timestamps:true})



//Model
//madel should be singular and start with capital letter

const User=mongoose.model('User',userSchema);
module.exports=User;



