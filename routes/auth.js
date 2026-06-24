const express = require("express");
const authrouter = express.Router();
const authcontroller = require("../controller/authcontroller");

//handle all log in route
authrouter.get("/login", authcontroller.getLogin);
authrouter.post("/login", authcontroller.postLogin);
authrouter.post("/logout", authcontroller.postLogout);

//handle all signup router
authrouter.get("/signup", authcontroller.getsignup);
authrouter.post("/signup", authcontroller.postsignup);
module.exports = { authrouter };
