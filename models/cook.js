const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cookSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  dish: { type: String, required: true },
  ingredients: { type: String, required: true },
  cost: { type: String, required: true },
  portions: { type: String, required: true }


});

const Cook = mongoose.model("Cook", cookSchema);

module.exports = Cook;
