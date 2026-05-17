const { homedata } = require("../model/malikdata");
const { homelist } = require("./malikcontroller");

const userfrontpage = (req, res, next) => {
  const homelist = homedata.fetchall();
  console.log("user tries to get homelisty", homelist);
  res.render("welcome.ejs", { homelist });
};

module.exports = {
  userfrontpage,
};
