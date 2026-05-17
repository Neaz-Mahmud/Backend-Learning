const express = require("express");

const userrouter = express.Router();

const usercontroller = require("../controller/usercontroller");

userrouter.get("/", usercontroller.userfrontpage);

module.exports = userrouter;
