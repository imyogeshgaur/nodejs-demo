const mongoose = require("mongoose");

const connectDb = async () => {
    try {
        await mongoose.connect("mongodb+srv://imyogeshgaur:imyogeshgaur@cluster0.f7yqn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
        });
    } catch (error) {
        console.log("Internal Server Error !!!!",error);
    }
}

module.exports =  connectDb;