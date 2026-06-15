
const { homelist } = require("./hostcontroller");
const Allfavourite = require("../model/favourite");
const Homedata = require("../model/homedata");

const userfrontpage = async (req, res, next) => {
  const homelist = await Homedata.find();

  res.render("store/homelist.ejs", { homelist });
};

const homedetails = async (req, res, next) => {
  const eachhome = await Homedata.find({ id: req.params.id });
  res.render("store/homedetails", { eachhome });
};

const favouratelist = async (req, res, next) => {
  const fav = await Allfavourite.find();
  const allhomes = await Homedata.find();

  const favlist = allhomes.filter((home) => {
    return fav.some((favourite) => {

      return favourite.id === home.id;
    });
  });

  res.render("store/favouritelist.ejs", { favlist });
};

const addfavourite = (req, res, next) => {
  const b = new Allfavourite({ id: req.params.id });
  b.save().then(() => {
    console.log("added to favourite list");
  }).catch((err) => { console.error("Error adding to favourite list:", err) });

  res.send("this added to your favourite list");
};

module.exports = {
  userfrontpage,
  homedetails,
  favouratelist,
  addfavourite,
};
