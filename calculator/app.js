const http = require("http");
const { buffer } = require("stream/consumers");

const server = http.createServer((req,res)=>{
    
    res.setHeader("Content-Type","text/html");

    if(req.url === "/"){
        res.write(`
            <html>
            <h1>Welcome to This page click on below link</h1>
            <a href = "/calculator" > Calculator </a>
            </html>

            `)

        return res.end();
    }
    if(req.url === "/calculator"){

           res.write(`
            <html>
              <form action="/cal-result" , method="POST">
              
              <label>First NO = </label>
              <input type="number" id="num1" name="num1">
              
              <label>Second NO = </label>
              <input type="number" id="num2" name="num2">

              <button type = "submit" > SUBMIT </button>
              </form>
            </html>

            `)

        return res.end();

    }
    if(req.url === "/cal-result"){
        
        // step 1 = Data in form of chunks 
           const list = [];
           req.on("data",(chunks)=>{
            list.push(chunks);
           })

        // step 2 = buffer , URL , Object   
           req.on("end",()=>{
            const bufferdata = Buffer.concat(list).toString();
            console.log(bufferdata);
            const urldata = new URLSearchParams(bufferdata);
            console.log(urldata);
            const objdata = Object.fromEntries(urldata);

            console.log(objdata);
            const sum = Number(objdata.num1) + Number(objdata.num2);

            res.write(`Sum of the data is = ${sum}`);
            return res.end();
           })



        return ;
    }

    
})

server.listen(3000,()=>{
    console.log("http/localhost:3000")
})