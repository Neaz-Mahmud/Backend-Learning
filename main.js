require("dotenv").config();
const express = require("express");

const session = require("express-session");
const app = express();

const { hostrouter } = require("./routes/hostrouter");
const storerouter = require("./routes/storerouter");
const errorrouter = require("./routes/errorhandle");
const { authrouter } = require("./routes/auth");
const { requireAuth } = require("./middleware/auth");

const path = require("path");
const rootdir = require("./utility/root");
const { mongoconnect } = require("./utility/database");
const { databaseconnect } = require("./config/db");
const { default: MongoStore } = require("connect-mongo");

app.set("view engine", "ejs");
app.set("views", "view");

app.use(
  session({
    secret: "fsdfsfs",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.mongoURI,
      dbName: "NEAZ",
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

app.use(express.static(path.join(rootdir, "public")));

app.use(express.urlencoded());
app.use(requireAuth);
app.use(authrouter);

app.use(hostrouter);
app.use(storerouter);
app.use(errorrouter);

databaseconnect(() => {
  app.listen(3000, () => {
    console.log("server is listening");
  });
});
