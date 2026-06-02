const { homedata } = require("../model/Homedata");
const { homelist } = require("./hostcontroller");



const userfrontpage = async (req, res, next) => {

  const homelist = await homedata.fetchall();

  res.render("store/homelist.ejs", { homelist })

}

const homedetails = async (req, res, next) => {

  const eachhome = await homedata.fetchbyid(req.params.id);
  res.render('store/homedetails',{eachhome});

}

module.exports = {
  userfrontpage,
  homedetails
};
