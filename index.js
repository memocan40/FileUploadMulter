const express=require('express');
const app=express();
const port=3000;


const dotenv = require("dotenv");
//
dotenv.config();


const router=require('./routes/routes')


app.get("/",(req,res)=>res.send("test"));
app.use("/data",router);

app.listen(port,()=>{console.log("server running")});