const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
    lastname: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },

    // createdAt: {
    //   type: Date,
    //   default: Date.now
    // }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
