const mongoose=require('mongoose')
const userSchema=new mongoose.Schema({
    name:String,
    age: { type: Number, min: 18, max: 65 },
    living:  Boolean,
})
