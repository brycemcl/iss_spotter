const { fetchMyIP } = require('./fetchMyIP');
const { fetchCoordsByIP } = require('./fetchCoordsByIP');
const { fetchISSFlyOverTimes } = require('./fetchISSFlyOverTimes');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }

  console.log('It worked! Returned IP:', ip);
});





fetchMyIP.js;