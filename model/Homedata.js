const mongoose = require("mongoose");

const homeschema = new mongoose.Schema({
  homeaddress: { type: String },
  ownername: String,
  id: Number,
});

const Homedata =
  mongoose.models.homedata || mongoose.model("homedata", homeschema);
module.exports = Homedata;
