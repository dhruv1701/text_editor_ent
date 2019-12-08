const express=require('express');
const http = require('http')
const cors=require('cors')
const socketIO = require('socket.io');

var app=express();

const API_PORT = process.env.PORT || 3001;

var server=http.createServer(app);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var io=socketIO(server);

io.on("connection",(socket)=>{
    socket.on("updatedText",(data)=>{
        io.emit("recievedText",data);
    });
    socket.on('disconnect', () => {
        console.log("A user disconnected")
    });
});

server.listen(API_PORT,'0.0.0.0',() => console.log(`LISTENING ON PORT ${API_PORT}`))