const express = require("express");
const authrouter = express.Router();
const session = require("express-session");
authrouter.use(
  session({
    secret: "fsdfsfs",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: mongoURI,
      collectionName: "sessions",
    }),
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
    },
  }),
);

exports.authrouter = authrouter;
