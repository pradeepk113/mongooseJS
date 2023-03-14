//require
const express=require('express');
const mongoose=require('mongoose')

//connect to mongoDB
mongoose.connect('mongodb://localhost/test')
.then(()=>console.log("connected!"))

//initiate
const app=express()

//Route
app.get('/',(req,res)=>{
    res.send("Welcome To Schema")
})
// listner
app.listen(3000,()=>{
    console.log('server is running on port 3K');
})