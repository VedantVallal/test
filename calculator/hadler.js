const sumfun = require('./sum')

const fun = (req,res)=>{
    
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
        return sumfun(req,res);
    }

    
}

module.exports = fun;