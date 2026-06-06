const { homedata } = require("../model/Homedata");
const { homelist } = require("./hostcontroller");
const { Allfavourite } = require("../model/favourite");

const userfrontpage = async (req, res, next) => {
  const homelist = await homedata.fetchall();

  res.render("store/homelist.ejs", { homelist });
};

const homedetails = async (req, res, next) => {
  const eachhome = await homedata.fetchbyid(req.params.id);
  res.render("store/homedetails", { eachhome });
};

const favouratelist = async (req, res, next) => {
  const favlist = await Allfavourite.fetchall();

  res.render("store/favouritelist.ejs", { favlist });
};

const addfavourite = (req, res, next) => {
  const b = new Allfavourite(req.params.id);
  b.save();

  res.send("this added to your favourite list");
};

module.exports = {
  userfrontpage,
  homedetails,
  favouratelist,
  addfavourite,
};
