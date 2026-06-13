const fs = require("fs").promises; // Note the .promises here
const path = require("path");
const { getdb, mongoconnect } = require("../utility/database");

const filepath = path.join(
  path.dirname(require.main.filename),
  "data",
  "home.json",
);

class homedata {
  constructor({ homeaddress, ownername, id }) {
    this.homeaddress = homeaddress;
    this.ownername = ownername;
    this.id = id;
  }

  // Adjusted to be async so we can await the file operations
  save() {
    getdb()
      .collection("homes")
      .insertOne(this)
      .then((res) => {});
  }

  // Properly returns the data using async/await
  static async fetchall() {
    try {
      const val = await getdb().collection("homes").find().toArray();

      return val;
    } catch (err) {
      return [];
    }
  }

  static async fetchbyid(id) {
    try {
      const allarr = await getdb()
        .collection("homes")
        .find({ id: id })
        .next()
        .toArray();

      return val;
    } catch (err) {
      return [];
    }
  }
}

module.exports = {
  homedata,
};
