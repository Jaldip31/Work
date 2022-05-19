const hotalModel = require("../model/hotalModel");

exports.insert = async (req, res) => {
  const hotalData = new hotalModel({
    hotal_name: req.body.hotal_name,
    location: req.body.location,
    rooms: {
      available_room: req.body.rooms.available_room,
      booked_room: req.body.rooms.booked_room,
      total_room: req.body.rooms.available_room + req.body.rooms.booked_room
    },
  });
  await hotalData.save().then((data) => res.send(data)).catch((e) => res.send(e));
};

exports.update = async (req, res) => {
  await hotalModel.findByIdAndUpdate( req.query.id , { 
      $set: {"rooms.booked_room":req.body.rooms.booked_room} 
    }).then(data=>data.modifiedCount==1?res.send("data updated..."):res.send("data not updated")).catch(e=>res.send(e))
};

exports.find = async (req, res) => {
    if (req.query.id) {
        console.log("__iddd", req.query.id)
        hotalModel.find({_id:req.query.id}).then(data => res.send(data)).catch(err => res.send(err))
    }else{

        await hotalModel.find({ "rooms.available_room": { $gt: 0 } },{}).then(data=>res.send(data)).catch(e=>res.send(e))
    }
}; 