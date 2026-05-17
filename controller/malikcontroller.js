const { homedata } = require("../model/malikdata");

const getaddhome = (req, res, next) => {
  res.render("add-home");
};

const homelist = [];

const postaddhome = (req, res, next) => {
  console.log("come to post data");
  const b = new homedata(req.body);
  b.save();

  res.render("successfull");
};

module.exports = {
  getaddhome,
  postaddhome,
  homelist,
};
