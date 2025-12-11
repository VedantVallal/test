const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.urlencoded({extended:true}))
// First Dummy Middleware 
app.use((req,res,next)=>{
    if (req.url.startsWith('/.well-known') || req.url === '/favicon.ico') {
    return next();
}

    console.log("1. First Middleware",req.url,req.method);
    next();
})

// Second Dummy Middleware 
app.use((req,res,next)=>{
    if (req.url.startsWith('/.well-known') || req.url === '/favicon.ico') {
    return next();
}

    console.log("2. Second Middleware",req.url,req.method);
    next();
})

app.use((req,res,next)=>{
    if (req.url.startsWith('/.well-known') || req.url === '/favicon.ico') {
    return next();
}

    console.log("3. Third Middleware",req.url,req.method);
    // res.send("<h1>This is Third Middleware</h1>")
    next()
})


// main middlewares 

app.get("/",(req,res,next)=>{
    console.log("4. Fourth Middleware");
    next();
})

app.get("/contact",(req,res,next)=>{
    console.log("5  . Fiftth Middleware Contact");
    res.send(`
        <h1>Wlcome to contact us page fill this detals </h1>

        <form action="/contact" method="POST">
        <input type="text" name ="name" placeholder="Enter Your Name">
        
        <input type="email" name ="Email" placeholder="Email">
        <button type="Submit">Submit</button>
        </form>
        `)

})


app.post("/contact",(req,res,next)=>{
    console.log("6  . Sixth Middleware Contact");
    const data = `
    Name : ${req.body.name},
    Email : ${req.body.Email}
    ------------------------------------------------
    `;
    fs.appendFile("data.txt",data,(err)=>{
        console.log(err);
    });
    res.send(` <h1>
        
        Thanku For Submitting the form ${req.body.name}
        </h1>
        `)

})



app.listen(3000,()=>{
    console.log("http/localhost:3000")
})