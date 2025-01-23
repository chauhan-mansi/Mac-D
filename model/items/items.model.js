const mongoose = require("mongoose");

const itemsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, enum: ["Small", "Medium", "Large"], required: true },
  price: { type: Number, required: true },
  category: { type: String, required: false },
});

const items = mongoose.model("Items", itemsSchema);
module.exports = items;
