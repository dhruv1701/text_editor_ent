const express=require('express');
//const cors=require('cors');
const http = require('http')
const socketIO = require('socket.io');

var app=express();

const API_PORT = process.env.PORT || 3001;

var server=http.createServer(app);

 var io=socketIO(server
//    ,{
//     handlePreflightRequest: (req, res) => {
//         const headers = {
//             "Access-Control-Allow-Headers": "Content-Type, Authorization",
//             "Access-Control-Allow-Origin": req.headers.origin, //or the specific origin you want to give access to,
//             "Access-Control-Allow-Credentials": true
//         };
//         res.writeHead(200, headers);
//         res.end();
//     }
//}
);

//io.set('origins', 'http://localhost:8080');

io.on("connection",(socket)=>{
    socket.on("updatedText",(data)=>{
        io.emit("recievedText",data);
    });
    socket.on('disconnect', () => {
        console.log("A user disconnected")
    });
});

server.listen(API_PORT,'0.0.0.0',() => console.log(`LISTENING ON PORT ${API_PORT}`))