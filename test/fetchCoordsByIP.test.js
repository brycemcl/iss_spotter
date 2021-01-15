const { fetchCoordsByIP } = require('../fetchCoordsByIP');
const { assert } = require('chai');


describe('fetchCoordsByIP', () => {
  it('check that latitude and longitude is valid', (done) => {
    fetchCoordsByIP("8.8.8.8", (error, data) => {
      assert.deepEqual(data, { latitude: 38.7936, longitude: -90.7854 });
      assert.strictEqual(error, null);
      done();
    });
  });
  it('check that error on invalid ip', (done) => {
    fetchCoordsByIP("8.8.8.", (error, data) => {
      assert.strictEqual(data, null);
      assert.strictEqual(error, "Could not find location");
      done();
    });
  });
});