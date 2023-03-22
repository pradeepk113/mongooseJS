//require
const mongoose=require('mongoose');
const result=require('./User')
//Schema
const Schema=mongoose.Schema
const addresSchema=new Schema({
    village:{type:String},
    city:{type:String,required:true},
    state:{type:String,required:true},
    pin:{type:Number},
    user:Schema.Types.ObjectId
},{timestamps:true})

//model
//madel should be singular and start with capital letter
const Address=mongoose.model('Address',addresSchema);
//export
module.exports=Address;

//***********OR************** */

// module.exports=mongoose.model('Address',addresSchema)