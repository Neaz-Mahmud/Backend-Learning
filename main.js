const express = require("express");

const app = express();

const { hostrouter } = require("./routes/hostrouter");
const storerouter = require("./routes/storerouter");
const errorrouter = require("./routes/errorhandle");

const path = require("path");
const rootdir = require("./utility/root");
const { mongoconnect } = require("./utility/database");

app.set("view engine", "ejs");
app.set("views", "view");

app.use(express.static(path.join(rootdir, "public")));

app.use(express.urlencoded());

app.use(hostrouter);
app.use(storerouter);
app.use(errorrouter);

mongoconnect(() => {
  app.listen(3000, () => {
    console.log("server is listening");
  });
});
