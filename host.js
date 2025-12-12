const express = require("express");
const path = require("path");
const rootdir = require("./utility/path")

const host = express.Router();



host.get("/home",(req,res,next)=>{
    res.sendFile(path.join(rootdir,'views','hosthome.html'))
});


host.post("/submit",(req,res,next)=>{
    res.sendFile(path.join(rootdir,'views','hostsubmit.html'));
});

module.exports = host;