const { getdb } = require("../utility/database");
const { homedata } = require("./Homedata");

const mongoose = require("mongoose");
const favouriteschema = new mongoose.Schema({
  id: Number
});


const Allfavourite = mongoose.models.Allfavourite || mongoose.model("Allfavourite", favouriteschema);
module.exports = Allfavourite;