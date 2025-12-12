const express = require("express");
const user = express.Router();
const path = require("path");
const rootdir = require("./utility/path")

user.use((req,res,next)=>{
    console.log(req.url,req.method);
    next();
})

user.get("/",(req,res,next)=>{
   res.sendFile(path.join(rootdir,'views','user.html'));
})


module.exports = user;