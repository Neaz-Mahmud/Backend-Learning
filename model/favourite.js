const { getdb } = require("../utility/database");
const { homedata } = require("./Homedata");

class Allfavourite {
  constructor(id) {
    this.id = id;
  }

  async save(id) {
    await getdb().collection("favourites").insertOne({ id: this.id });
  }

  static async fetchall() {
    const all = await getdb().collection("favourites").find().toArray();
    const allhome = await homedata.fetchall();

    const final = allhome.filter((ele) => {
      return all.some((id) => {
        return id.id === ele.id;
      });
    });
    console.log("final is here", final);
    return final;
  }
}

module.exports = {
  Allfavourite,
};
