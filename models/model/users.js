const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    name:{type:String, require:true},
    age:{type:Number, min:18, max:60},
    email:{type:String, lowercase:true, trim:true},
    password:{type:String, minlength:5, maxlenght:10}
})
const Tank=mongoose.Model("Tank",userSchema)
// for export
module.exports=Tank;