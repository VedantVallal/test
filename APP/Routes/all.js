const express = require("express");

const all= express.Router();


all.get("/",(req,res,next)=>{
     res.render('home',{homes:allhomes,shriram :'1. Get Request Home page '});
})

const allhomes = [];

all.get("/addhome", (req, res,next) => {  
    res.render('addhome');

});

all.post("/return",(req,res,next)=>{
     console.log(req.body); 
     allhomes.push({home : req.body.home})
     console.log(allhomes); 
     res.render('return');
    
})

all.post("/",(req,res,next)=>{
    res.render('home',{homes:allhomes,shriram :'2. POST Request Home page '});
})


module.exports = all;