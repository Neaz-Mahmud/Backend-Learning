const express = require("express");

const userrouter = express.Router();
const malikcontroller = require("../controller/malikcontroller");

userrouter.get("/add-home", malikcontroller.getaddhome);

userrouter.post("/add-home", malikcontroller.postaddhome);

module.exports = {
  mailkrouter: userrouter,
  homelist: malikcontroller.homelist,
};
