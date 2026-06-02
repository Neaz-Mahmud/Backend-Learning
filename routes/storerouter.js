const express = require("express");

const storerouter = express.Router();

const storecontroller = require("../controller/storecontroller");

storerouter.get("/", storecontroller.userfrontpage);
storerouter.get("/home/:id", storecontroller.homedetails);

module.exports = storerouter;
