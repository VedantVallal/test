const http = require("http");
const udata = require('./script')

const server = http.createServer(udata);


server.listen(3000,()=>{
    console.log("Server Running on http:localhost:3000");
})