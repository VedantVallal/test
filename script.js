const fs = require("fs");
const http = require("http")

const userserver = (req,res)=>{

    res.setHeader("content-Type" , "text/html");
    console.log(req.method,req.url)

    if(req.url === "/")
    {
        res.write(`
            
            <html>
            <head>
            <title>Home</title>
            </head>
            <body>
              <form action="/submit" method="POST">
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

            return res.end();
    }

    if(req.url === "/submit" && req.method === "POST"){
        
        
        // Data Store in Chunks 
        const list = [];
        
        req.on("data",(chunks)=>{
            console.log(chunks);
            list.push(chunks)
        })
        
        req.on("end",()=>{
            
            // Buffer The DATA 
            const data = Buffer.concat(list).toString();
            console.log(data);
            
            // URL the DATA 
            const para = new URLSearchParams(data);
            console.log(para);
            
            // Convert into Object 
            const objectdata = Object.fromEntries(para);
            console.log(objectdata.username);
            
            fs.writeFileSync("New.txt", JSON.stringify(objectdata));
        
        res.write(`<h1>Thank you for submit , ${objectdata.username} </h1>`)
        
        
        return res.end();
        })
        return;
        

    }
}

module.exports = userserver;