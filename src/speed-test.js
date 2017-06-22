const speedTest = require('speedtest-net');
const eventToPromise = require('event-to-promise');


class SpeedTest {
  constructor() {

  }
  async run() {
    let s = speedTest();
    return await eventToPromise(s, 'data')
      .then(data => {
        // console.log('_speedTest:data', data);
        return data;
      })
      .catch(err => {
        console.error('_speedTest:error', err);
        throw err;
      });
  }
}

module.exports = SpeedTest;
