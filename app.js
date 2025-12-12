const express = require("express");
const user = require("./user");
const host = require("./host");

// Actual Code 
const app = express();

app.use(express.urlencoded({extended:true}));
app.use(user);
app.use(host);



// App Listening 
app.listen(3000,()=>{
    console.log("http/localhost:3000");
})