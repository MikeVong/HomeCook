const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  dish: { type: String },
  ingredients: { type: String, required: true },
  coordinates: { type: Array},
  address: { type: String}
  /*,
  cost: { type: String, required: true },
  portions: { type: String, required: true },
  email: { type: String, required: true },
  
  */
});

const Cook = mongoose.model("Cook", bookSchema);

module.exports = Cook;
