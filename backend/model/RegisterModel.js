const mongoose = require("mongoose");
const RegisterModel = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true
    },
    lastname: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true,
      min: 5,
      max:255
    },
    email: {
      type: String,
      required: true,
      min: 6,
      max: 255
    },
    password: {
      type: String,
      required: true,
      min: 6,
      max: 1024
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", RegisterModel);
