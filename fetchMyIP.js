const { promisify } = require('util');
const request = promisify(require("request"));

const fetchMyIP = function(callback) {
  request(`https://api.ipify.org?format=json`)
    .then(({ body }) => {
      return JSON.parse(body).ip;
    })
    .then((data) => {
      if (data) {
        callback(null, data);
      }
    })
    .catch(
      () => {
        callback("Could not fetch ip", null);
      }
    );

};

module.exports = { fetchMyIP };