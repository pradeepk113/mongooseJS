//require
const express=require('express');
const mongoose=require('mongoose');

//capture data from product;
 const Product=require('./model/product')
//connecting to mongodb
mongoose.connect('mongodb://localhost/sample')
.then(()=>console.log('connected'))
.catch((err)=>console.log(err ))

//initiate
const app=express()
//middlewares
app.use(express.json())

//Routing
app.get('/',(req,res)=>{
    res.send('<h1> Welcome to CRUD operation in mongoose </h1>')
})
app.post('/products',(req,res)=>{
    //capture the data
    console.log(req.body)
    //save the data to database
    let data=req.body
    Product.create(data)
    .then(()=>res.json(data))
    .catch((err)=>console.log(err))
})
app.get('/products',(req,res)=>{
    Product.find({})
})
//Listner
app.listen(3000,()=>{
    console.log('server is running at port 3K');
})