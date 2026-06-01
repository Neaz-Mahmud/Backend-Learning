const fs = require('fs').promises; // Note the .promises here
const path = require('path');

const filepath = path.join(path.dirname(require.main.filename), "data", "home.json");

class homedata {
  constructor({ homeaddress }) {
    this.homeaddress = homeaddress;
  }

  // Adjusted to be async so we can await the file operations
  async save() {
    let alldata = [];

    try {
      // 1. Try to read the existing file
      const data = await fs.readFile(filepath, 'utf-8');
      alldata = JSON.parse(data);
    } catch (err) {
      // 2. If file doesn't exist (ENOENT), we keep alldata as an empty array []
      if (err.code !== 'ENOENT') {
        console.error('Error reading data:', err);
        throw err;
      }
    }

    // 3. Add the new address and save
    alldata.push(this.homeaddress);

    try {
      await fs.writeFile(filepath, JSON.stringify(alldata, null, 2));
    } catch (err) {
      console.error('Error in writing final data:', err);
    }
  }  

  // Properly returns the data using async/await
  static async fetchall() {
      
    try {
      const data = await fs.readFile(filepath);
  
      return JSON.parse(data);
    } catch (err) {
      if (err.code === 'ENOENT') {
        return []; // Return empty array if file doesn't exist yet
      }
      console.error('Error fetching data:', err);
      return [];
    }
  }
}

module.exports = {
  homedata,
};