//Require
const express=require('express');
const logger=require('morgan');
const cookieParser=require('cookie-parser')
var mongoose=require('mongoose')
// Connect to mongodb
mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => console.log('Connected!'));
//Initiate
var app=express();
// middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//Route
app.get('/',(req,res)=>{
    res.send("welcome to Mongoose")
})
//Error Handler
app.use((req,res,next)=>{
    res.send("page Not Found")
})
// listner
app.listen(3000,()=>{
    console.log('server is runnig at port 3K');
})