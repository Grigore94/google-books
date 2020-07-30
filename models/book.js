const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bSchema = new Schema({
  title: { type: String, required: true },
  authors: { type: String, required: true },
  synophis: String,
  image: { type: String, trim: true },
  link: { type: String, trim: true },
//   data: { type: Data, default: Data.now },
});
const Book = mongoose.model("Book", bSchema);

module.exports = Book;
