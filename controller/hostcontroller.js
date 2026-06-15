const homedata = require("../model/homedata");
const fs = require('fs');
const path = require('path');


const getaddhome = (req, res, next) => {
  res.render("host/add-home");
};

const homelist = [];

const postaddhome = (req, res, next) => {
  console.log(req.body);
  const b = new homedata({

    homeaddress: req.body.homeaddress,
    ownername: req.body.ownername,
    id: req.body.id
  });
  b.save().then(() => {
    res.render("host/successfull");
  })
};

module.exports = {
  getaddhome,
  postaddhome,
  homelist,
};
