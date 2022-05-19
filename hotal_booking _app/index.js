const express = require("express");
const app = express();
app.use(express.json())

//body-parser
const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: true }));

//view engine
const ejs = require("ejs");
app.set('view engine', 'ejs'); 


const {hotal ,user}= require("./server/router/router")
app.use("/",hotal)
app.use("/user",user)


const port = 5151
app.listen(port,()=>console.log(`listing port ${port}`));