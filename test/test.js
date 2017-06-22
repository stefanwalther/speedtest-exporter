const speedTest = require('./../src/speed-test');
const promFormatter = require('./../src/prom-formatter');

let test = new speedTest();
test.run()
  .then( v => {
    console.log('v', v);
    console.log('f', promFormatter.format(v));
  })
  .catch(e => {
    console.log('e', e);
  });
