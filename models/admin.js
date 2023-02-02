const mongoose = require("mongoose");

const AdminSchema = mongoose.Schema({
  name: String,
  surname: String,
  image: String,
});

module.exports = mongoose.model('admin', AdminSchema);
