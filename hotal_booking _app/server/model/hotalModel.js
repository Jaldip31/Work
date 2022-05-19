const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
    hotal_name:{type:String},
    location:{type:String},
    rooms:{
        available_room:{type:Number},
        booked_room:{type:Number},
        total_room:{type:Number}
    }
})

const hotalModel = new mongoose.model("HotalData",hotelSchema);

module.exports = hotalModel;