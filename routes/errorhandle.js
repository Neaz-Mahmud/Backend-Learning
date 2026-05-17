const express = require("express");
const errorrouter = express.Router();
const path = require("path");
const rootdir = require("../utility/root");

errorrouter.use((req, res, next) => {
  res.sendFile(path.join(rootdir, "view", "error.html"));
});

module.exports = errorrouter;
