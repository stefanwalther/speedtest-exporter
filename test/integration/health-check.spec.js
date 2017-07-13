/* global before, after, it */
const superTest = require('supertest');
const HttpStatus = require('http-status-codes');
const AppServer = require('./../../src/server');
const pkg = require('./../../package.json');

describe('INTEGRATION ==> GET `health-check`', () => {

  let server;
  const appServer = new AppServer();

  before(() => {
    appServer.start()
    .then(() => {
      server = superTest(appServer.server);
    })
  });

  after(() => {
    appServer.stop();
  });

  it('returns a timestamp', () => {
    return server
      .get('/health-check')
      .expect(HttpStatus.OK)
      .then(res => {
        expect(res).to.exist;
        expect(res).to.have.a.property('body');
        expect(res.body).to.have.a.property('ts');
        expect(res.body).to.have.a.property('version').to.equal(pkg.version);
        expect(res.body).to.have.a.property('name').to.equal(pkg.name);
      })
  });
  
});
