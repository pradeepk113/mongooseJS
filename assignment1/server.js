// Require
const express=require('express')
const mongoose=require('mongoose');
//connecting to mongodb
mongoose.connect('mongodb://localhost/test')
.then(()=>console.log('connected to Mongodb'))

//Initiate
const app=express();
//Routing
app.get('/',(req,res)=>{
    res.send('<h1>Welcome to Mongoose</h1>');
})
//Error handler
app.use((req,res,next)=>{
    res.send('<h1>page not found</h1>')
})
app.listen(3000,()=>{
    console.log("server is running on port 3K")
})
