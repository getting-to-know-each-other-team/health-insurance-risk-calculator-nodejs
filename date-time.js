//Couldn't run the server because of the line var dt = require('./date-time') in index.js so I made the file myself -JB
module.exports = {
  getCurrentDateTime: function() {
      return new Date().toLocaleString();
  }
};