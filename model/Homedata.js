const fs = require("fs").promises; // Note the .promises here
const path = require("path");

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
  async save() {
    let alldata = [];

    try {
      // 1. Try to read the existing file
      const data = await fs.readFile(filepath, "utf-8");
      alldata = JSON.parse(data);
    } catch (err) {
      // 2. If file doesn't exist (ENOENT), we keep alldata as an empty array []
      if (err.code !== "ENOENT") {
        console.error("Error reading data:", err);
        throw err;
      }
    }

    // 3. Add the new address and save
    alldata.push({
      homeaddress: this.homeaddress,
      ownername: this.ownername,
      id: this.id,
    });

    try {
      await fs.writeFile(filepath, JSON.stringify(alldata, null, 2));
    } catch (err) {
      console.error("Error in writing final data:", err);
    }
  }

  // Properly returns the data using async/await
  static async fetchall() {
    try {
      const data = await fs.readFile(filepath);

      return JSON.parse(data);
    } catch (err) {
      if (err.code === "ENOENT") {
        return []; // Return empty array if file doesn't exist yet
      }
      console.error("Error fetching data:", err);
      return [];
    }
  }

  static async fetchbyid(id) {
    try {
      const allhome = JSON.parse(await fs.readFile(filepath));

      const ehome = allhome.find((home) => {
        return home.id == id;
      });

      return ehome;
    } catch (err) {}
  }
}

module.exports = {
  homedata,
};
