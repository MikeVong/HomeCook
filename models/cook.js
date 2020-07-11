const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cookSchema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true},
  dish: { type: String },
  src: {type: String},
  ingredients: { type: String },
  portions: { type: Number },
  cost: { type: Number },
  email: { type: String },
  payBy: {type: String},
  coordinates: { type: Array}
  
});

const Cook = mongoose.model("Cook", cookSchema);

module.exports = Cook;
