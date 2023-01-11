const bodyparser = require('body-parser')
const express=require('express')
const app=express()
const port=5000
// const mongoose=require("mongoose");
const curdSchema = require('./Models/curdSchema');
const { find } = require('./Models/curdSchema');
const { response } = require('express');
require("./Models/config")
const userRouter = require('./routers/userRouters');

app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

// app.use("/",user)
app.use("/",userRouter)

app.listen(port,()=>{
    
    console.log(`server is running on port no:${port}`);
});