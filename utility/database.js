const mongodb = require("mongodb");

const mongoclient = mongodb.MongoClient;

const url =
  "mongodb://neaz:neaz@ac-lwanspx-shard-00-00.jbtxdke.mongodb.net:27017,ac-lwanspx-shard-00-01.jbtxdke.mongodb.net:27017,ac-lwanspx-shard-00-02.jbtxdke.mongodb.net:27017/?ssl=true&replicaSet=atlas-10ib24-shard-0&authSource=admin&appName=prothomcluster";

let mydb;
const mongoconnect = (callback) => {
  mongoclient
    .connect(url)
    .then((client) => {
      mydb = client.db("NEAZ");
      callback();
    })
    .catch((err) => {
      console.log("err happend", err);
    });
};

const getdb = () => {
  if (mydb) return mydb;
};

exports.mongoconnect = mongoconnect;
exports.getdb = getdb;
