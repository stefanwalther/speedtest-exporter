process.env.NODE_ENV = 'test';
if (process.env.CIRCLECI !== 'true') {
  // Do nothing for now
}
global.expect = require('chai').expect;
