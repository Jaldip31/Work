const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    first_name:{type:String},
    last_name:{type:String},
    email:{type:String},
    book_room:{type:Number},
    hotal_name:{type:String},
    hotal_id:{type:String}
})

const userModel = new mongoose.model("userData",userSchema);

module.exports = userModel;