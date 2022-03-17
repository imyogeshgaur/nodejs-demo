const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    nameOfUser:String,
    emailOfUser:String,
    phoneOfUser:String,
    messageOfUser:String,
});

module.exports = User = mongoose.model("User",userSchema);