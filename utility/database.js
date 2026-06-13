const mongodb = require("mongodb");

const mongoclient = mongodb.MongoClient;

const url =
  "mongodb+srv://neaz:neaz@prothomcluster.jbtxdke.mongodb.net/?appName=prothomcluster";

let mydb;
const mongoconnect = (callback) => {
  mongoclient
    .connect(url)
    .then((client) => {
      mydb = client.db("NEAZ");
      callback();
    })
    .catch((err) => {
      console.log("err happend");
    });
};

const getdb = () => {
  if (mydb) return mydb;
};

exports.mongoconnect = mongoconnect;
exports.getdb = getdb;
