const sumfun = (req,res)=>{
    
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

module.exports = sumfun;