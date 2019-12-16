const mongoose = require("mongoose");

const BlogModel = new mongoose.Schema(
  {
    username: { type: String, required: true, min: 5, max: 255 },
    header: { type: String, required: true, max: 255 },
    body: { type: String, required: true, max: 2048 }
  },
  { timestamps: true }
);

module.exports = mongoose.model("blogs", BlogModel);
