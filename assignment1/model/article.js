//require
const mongoose=require('mongoose');
//Schema
const Schema=mongoose.Schema

const articleSchema=new Schema({
    title:String,
    discription:String,
    tags:String,
    createAt:{type:Date,default:new Date()},
    likes:{type:Number,default:0}
})

//Model
//madel should be singular and start with capital letter

const Article=mongoose.model('Article',articleSchema);
//export
module.exports=Article