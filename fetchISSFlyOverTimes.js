const { promisify } = require('util');
const request = promisify(require("request"));

const fetchISSFlyOverTimes = promisify(function (latLong, callback) {
  request(`http://api.open-notify.org/iss-pass.json?lat=${latLong.latitude}&lon=${latLong.longitude}`)
    .then(({ body }) => {
      return JSON.parse(body).response;
    })
    .then((data) => {
      if (data !== undefined) {
        callback(null, data);
      } else {
        callback("Could not find times the ISS is flying over", null);
      }
    })
    .catch(
      () => {
        callback("Could not find times the ISS is flying over", null);
      }
    );

});
module.exports = { fetchISSFlyOverTimes };