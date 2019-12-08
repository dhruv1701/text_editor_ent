const express=require('express');
const http = require('http')
const cors=require('cors')
const socketIO = require('socket.io');

var app=express();

const API_PORT = process.env.PORT || 3001;

var server=http.createServer(app);

app.use(cors())
app.options('*',cors());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

 var io=socketIO(server,{
    handlePreflightRequest: (req, res) => {
        const headers = {
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
            "Access-Control-Allow-Origin": "*", //or the specific origin you want to give access to,
            "Access-Control-Allow-Credentials": true
        };
        res.writeHead(200, headers);
        res.end();
    }
}
);

io.set('origins', '*:*');

io.on("connection",(socket)=>{
    console.log("connected");
    socket.on("updatedText",(data)=>{
        console.log(data.senderUsername);
        io.emit("recievedText",data);
    });
    socket.on('disconnect', () => {
        console.log("A user disconnected")
    });
});

server.listen(API_PORT,'0.0.0.0',() => console.log(`LISTENING ON PORT ${API_PORT}`))