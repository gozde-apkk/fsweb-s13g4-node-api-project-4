const express =require("express"); //1

const server = express();   //2 
require("dotenv").config();
const router = require("./users/users-router")

server.use(express.json());  //3

server.get("/", (req,res)=>{
    res.send("<h1>Node App is working</h1>")
})

server.use("/api",router);



module.exports = server;