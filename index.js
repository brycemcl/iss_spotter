const { promisify } = require('util');
const fetchMyIP = promisify(require('./fetchMyIP').fetchMyIP);
const fetchCoordsByIP = promisify(require('./fetchCoordsByIP').fetchCoordsByIP);
const fetchISSFlyOverTimes = promisify(require('./fetchISSFlyOverTimes').fetchISSFlyOverTimes);

fetchMyIP()
  .then(fetchCoordsByIP)
  .then(fetchISSFlyOverTimes)
  .then((flyovers) => {
    flyovers.forEach(flyover => {
      const date = new Date(flyover.risetime * 1000);
      console.log(`Next pass at ${date.toLocaleString('en-CA', { timeZone: 'America/Vancouver' })} for ${flyover.duration} seconds!`);
    });
  })
  .catch((error) => {
    console.log(error);
  });


