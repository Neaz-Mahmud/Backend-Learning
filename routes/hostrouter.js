const express = require("express");

const hostrouter = express.Router();

const malikcontroller = require("../controller/malikcontroller");

hostrouter.get("/add-home", malikcontroller.getaddhome);

hostrouter.post("/add-home", malikcontroller.postaddhome);

module.exports = {
  hostrouter: hostrouter,
  homelist: malikcontroller.homelist,
};
