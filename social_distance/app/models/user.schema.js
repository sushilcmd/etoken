const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  id: String,
  name: String,
  age: Number,
  city: String,
  currentCity: String,
  currentAddress: String
});

exports.user = mongoose.model('user', userSchema);