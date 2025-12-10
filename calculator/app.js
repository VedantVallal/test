const http = require("http");
const { buffer } = require("stream/consumers");
const fun = require('./hadler')

const server = http.createServer(fun)

server.listen(3000,()=>{
    console.log("http/localhost:3000")
})