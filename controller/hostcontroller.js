const { homedata } = require("../model/Homedata");
const fs = require('fs');
const path = require('path');


const getaddhome = (req, res, next) => {
  res.render("host/add-home");
};

const homelist = [];

const postaddhome = (req, res, next) => {

  const b = new homedata(req.body);
  b.save();



  res.render("host/successfull");
};

module.exports = {
  getaddhome,
  postaddhome,
  homelist,
};
