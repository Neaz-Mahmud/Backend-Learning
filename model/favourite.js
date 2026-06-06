const fs = require("fs").promises;
const { homedata } = require("./Homedata");
const path = require("path");
const filepath = path.join(
  path.dirname(require.main.filename),
  "data",
  "favouritelist.json",
);
let allfav = [];

class Allfavourite {
  constructor(id) {
    this.id = id;
  }

  async save(id) {
    try {
      const favouritelist = await fs.readFile(filepath);
      allfav = JSON.parse(favouritelist);
    } catch (err) {
      if (err.code !== "ENOENT") {
        throw err;
      } else allfav = [];
    }

    if (allfav.includes(this.id) === false) allfav.push(this.id);

    await fs.writeFile(filepath, JSON.stringify(allfav));
  }

  static async fetchall() {
    try {
      const favlist = await fs.readFile(filepath);

      let fav = [];
      if (favlist.length) fav = JSON.parse(favlist);

      const registerhomes = await homedata.fetchall();
      fav = fav.map((ele) =>
        registerhomes.find((home) => {
          if (home.id === ele) return home;
        }),
      );
      console.log(fav);
      return fav;
    } catch (err) {
      return [];
    }
  }
}

module.exports = {
  Allfavourite,
};
