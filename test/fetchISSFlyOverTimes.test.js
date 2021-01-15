const { fetchISSFlyOverTimes } = require('../fetchISSFlyOverTimes');
const { assert } = require('chai');


describe('fetchISSFlyOverTimes', () => {
  it('returns a valid array of times', (done) => {
    fetchISSFlyOverTimes({ latitude: 38.7936, longitude: -90.7854 }, (error, data) => {
      assert.typeOf(data[0].duration, "number");
      assert.typeOf(data, "array");
      assert.typeOf(data[0], "object");
      assert.strictEqual(error, null);
      done();
    });
  }).timeout(5000);

  it('check that error occurs when invalid latitude & longitude is passed in', (done) => {
    fetchISSFlyOverTimes("", (error, data) => {
      assert.strictEqual(data, null);
      assert.strictEqual(error, "Could not find times the ISS is flying over");
      done();
    });
  }).timeout(5000);
});