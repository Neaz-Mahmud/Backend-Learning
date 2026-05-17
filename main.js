const express = require("express");

const app = express();

const { mailkrouter } = require("./routes/malik");
const userrouter = require("./routes/user");
const errorrouter = require("./routes/errorhandle");
const path = require("path");
const rootdir = require("./utility/root");

app.set("view engine", "ejs");
app.set("views", "view");

app.use(express.static(path.join(rootdir, "public")));

app.use(express.urlencoded());

app.use(userrouter);
app.use(mailkrouter);
app.use(errorrouter);

app.listen(3000, () => {
  console.log("server is listening");
});
