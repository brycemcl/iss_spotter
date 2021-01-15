const { fetchMyIP } = require('../fetchMyIP');
const { assert } = require('chai');


describe('fetchMyIP', () => {
  it('check that ip is valid', (done) => {
    fetchMyIP((error, ip) => {
      assert.strictEqual(ip, "173.183.2.29");
      assert.strictEqual(error, null);
      done();
    });
  }).timeout(5000);
});