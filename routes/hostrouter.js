const express = require("express");

const hostrouter = express.Router();

const hostcontroller = require("../controller/hostcontroller");

hostrouter.get("/add-home", hostcontroller.getaddhome);

hostrouter.post("/add-home", hostcontroller.postaddhome);

module.exports = {
  hostrouter: hostrouter,
  homelist: hostcontroller.homelist,
};
