const speedTestNet = require('speedtest-net');
const eventToPromise = require('event-to-promise');

class SpeedTest {

  async run() {
    let s = speedTestNet();
    return eventToPromise(s, 'data')
      .then(data => {
        return data;
      })
      .catch(err => {
        console.error('_speedTest:error', err);
        throw err;
      });
  }
}

module.exports = SpeedTest;
