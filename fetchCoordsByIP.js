const { promisify } = require('util');
const request = promisify(require("request"));

const fetchCoordsByIP = function(ip, callback) {
  request(`https://freegeoip.app/json/${ip}`)
    .then(({ body }) => {
      const { latitude, longitude } = JSON.parse(body);
      return { latitude, longitude };
    })
    .then((data) => {
      if (data) {
        callback(null, data);
      }
    })
    .catch(
      () => {
        callback("Could not find location", null);
      }
    );

};

module.exports = { fetchCoordsByIP };