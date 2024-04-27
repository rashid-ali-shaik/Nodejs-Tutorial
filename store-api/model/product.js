const mongoose = require("mongoose");

let ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "product name must be required"],
  },
  price: {
    type: Number,
    required: [true, "product value must be required"],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  company: {
    type: String,
    enum: {
      values: ["ikea", "Head", "Wilson", "acer"],
      message: "{VALUE} is not supported",
    },
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("product", ProductSchema);
