const userModel = require("../model/userModel");
const hotalModel = require("../model/hotalModel");
const axios = require("axios");

exports.find = async (req, res) => {
    axios.get("http://localhost:5151/find").then((dataa) => {
        res.render("index", { hotalArr: dataa.data })
    }).catch(err => {
        res.send(err);
    })
};
exports.addUser = async (req, res) => {

  axios.get("http://localhost:5151/find", { params: { id: req.query.id } })
  .then(function (reee) {
      res.render("addUser", { hotallArr: reee.data })
  }).catch(err => {
      res.send(err);
  })
};

exports.insert= async (req, res) => {
  
  console.log(req.body)
  const userData = new userModel({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    book_room: req.body.book_room,
    hotal_id: req.body.hotal_id,
    hotal_name: req.body.hotal_name 
  });
  await userData.save()
  const roomsData = await hotalModel.findOne({_id:req.body.hotal_id},{rooms:1})

  console.log("roomsData.rooms.booked_room",roomsData.rooms.booked_room,typeof(roomsData.rooms.booked_room))
  await hotalModel.findByIdAndUpdate( req.body.hotal_id , { 
      $set: {
        "rooms.available_room": roomsData.rooms.available_room - req.body.book_room,
        "rooms.booked_room": roomsData.rooms.booked_room + Number(req.body.book_room) 
      } 
    })
    // .then(data=>data.modifiedCount==1?res.send("data updated..."):res.send("data not updated")).catch(e=>res.send(e))

  axios.get("http://localhost:5151/find").then(function (resss) {
    res.render("index", { hotalArr: resss.data })
  }).catch(err => {
    res.send(err);
})
};
