const express = require("express") ;
const connectDB = require("../database/connection")
const servicesHotal = require("../services/hotal")
const servicesUser = require("../services/user")
connectDB();

const hotal = express.Router();
hotal.get("/find",servicesHotal.find)
hotal.post("/insert",servicesHotal.insert)
hotal.put("/update",servicesHotal.update)

const user = express.Router();
user.get("/",servicesUser.find)
user.get("/addUser",servicesUser.addUser)   
user.post("/insert",servicesUser.insert)


module.exports = {hotal,user};