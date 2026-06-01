const express = require("express");
const errorrouter = express.Router();
const path = require("path");
const rootdir = require("../utility/root");

errorrouter.use((req, res, next) => {
  res.render("error.ejs");
});

module.exports = errorrouter;
