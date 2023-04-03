const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const productSchema=new Schema({
    title:{type:String, required:true},
    category:String,
    price:{type:String,default:0}
},{timestamps:true})

//model
const Product=mongoose.model('Product',productSchema)
//export
module.exports=Product;