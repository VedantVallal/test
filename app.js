const express = require("express");

const app = express();

app.use(express.urlencoded({extended:true}))

app.get("/about",(req,res,next)=>{
    console.log("middleware - First 1")
    res.send(`
        
                  <html>
            <head>
            <title>Home</title>
            </head>
            <body>
              <form action="/about" method="POST">
              <label> UserName : </label>
              <input type="text" id="name" name="username" placeholder="Enter your Name">
              <br>
              <label> Male: </label>
              <input type="radio" id="male" name="gender" value="male">

              
              <label> Female : </label>
              <input type="radio" id="Female" name="gender" value="Female">
              <br>
              <button type="submit">Submit</button>
              
              </form>
            </body>
            </html>
        
        `)
    next()
})


app.post("/about",(req,res,next)=>{
    console.log("middleware - Second 2") 
      // Data Store in Chunks 
            
            res.send(`<h1> Welcome to our app ${req.body.username} </h1>`)
    
    
})

// App listen 
app.listen(3000,()=>{
    console.log("http/localhost:3000");
})