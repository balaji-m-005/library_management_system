const mongoose = require("mongoose");

async function connectDB() {
    const connection = await mongoose.connect("mongodb+srv://senthilbalaji:4uJ7aR8MQHAVJSOJ@cluster0.gxar02e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    console.log("MongoDB connected");
}


module.exports = connectDB;