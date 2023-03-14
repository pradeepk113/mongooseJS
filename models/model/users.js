const mongoose=require('mongoose');
//schema
const userSchema=new mongoose.Schema({
    name:{type:String, require:true},
    age:{type:Number, min:18, max:60},
    email:{type:String, lowercase:true, trim:true},
    password:{type:String, minlength:5, maxlenght:10}

})

// model
const Tank=mongoose.model("Tank",userSchema)
// for model export
module.exports=Tank;