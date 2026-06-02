const { homedata } = require("../model/Homedata");
const { homelist } = require("./hostcontroller");

const userfrontpage = async (req, res, next) => {
  const homelist = await homedata.fetchall();
  console.log("user tries to get homelisty", homelist);
  res.render("welcome.ejs", { homelist });
};

module.exports = {
  userfrontpage,
};
