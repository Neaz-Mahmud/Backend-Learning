const homelist = [];

class homedata {
  constructor({ homeaddress }) {
    console.log("hey bro", homeaddress);
    this.Homeadress = homeaddress;
  }
  save() {
    homelist.push(this.Homeadress);
  }

  static fetchall() {
    return homelist;
  }
}

module.exports = {
  homedata,
};
