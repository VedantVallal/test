const express = require("express");
const all = require("./Routes/all");

const app = express();
app.use(express.urlencoded({ extended: false }));

// EJS 
app.set("view engine", "ejs");


app.use((req,res,next)=>{
    console.log(req.url,req.method);
    next();
})

app.use(all);

app.listen(3000,()=>{
    console.log("http//localhost:3000");
})