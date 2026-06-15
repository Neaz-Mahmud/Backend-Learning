const mongoose = require("mongoose");

const databaseconnect = (callback) => {
    mongoose.connect("mongodb://neaz:neaz@ac-lwanspx-shard-00-00.jbtxdke.mongodb.net:27017,ac-lwanspx-shard-00-01.jbtxdke.mongodb.net:27017,ac-lwanspx-shard-00-02.jbtxdke.mongodb.net:27017/NEAZ?ssl=true&replicaSet=atlas-10ib24-shard-0&authSource=admin&appName=prothomcluster").then(() => {
        callback();
    }

    ).catch((err) => {
        console.log("err happend", err);
    });

}

exports.databaseconnect = databaseconnect;