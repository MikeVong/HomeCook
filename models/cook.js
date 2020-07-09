const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cookSchema = new Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  dish: { type: String },
  ingredients: { type: String, required: true },
  coordinates: { type: Array},
  address: { type: String},
  cost: { type: String },
  portions: { type: String },
  email: { type: String },
  src: {type: String}
  
});

const Cook = mongoose.model("Cook", cookSchema);

module.exports = Cook;
