const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  name: {
    type: String,
    required: true
  }
})

const category = mongoose.model("category", CategorySchema);
module.exports = category