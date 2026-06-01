const express = require("express");

const storerouter = express.Router();

const storecontroller = require("../controller/storecontroller");

storerouter.get("/", storecontroller.userfrontpage);

module.exports = storerouter;
