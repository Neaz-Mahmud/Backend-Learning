const express = require("express");

const storerouter = express.Router();

const usercontroller = require("../controller/usercontroller");

storerouter.get("/", usercontroller.userfrontpage);

module.exports = storerouter;
