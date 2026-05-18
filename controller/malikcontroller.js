const { homedata } = require("../model/malikdata");
const fs = require('fs');
const path = require('path');


const getaddhome = (req, res, next) => {
  res.render("add-home");
};

const homelist = [];

const postaddhome = (req, res, next) => {

  const b = new homedata(req.body);
  b.save();

  const homedatastore = path.join(
    path.dirname(require.main.filename), 'data','home.json'
  );

  fs.writeFile(homedatastore, JSON.stringify(homedata.fetchall()),(errr)=>{
   console.log("error happens");
  });


  res.render("successfull");
};

module.exports = {
  getaddhome,
  postaddhome,
  homelist,
};
