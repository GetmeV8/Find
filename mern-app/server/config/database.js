const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect("mongodb+srv://rameezebrahim:2NA_HncwnaE36%252@cluster0.u1umpy6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
};

module.exports = connectDB;
