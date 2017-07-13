const Koa = require('koa');
const _ = require('koa-route');
const SpeedTest = require('./speed-test');
const promFormatter = require('./prom-formatter');
const os = require('os');
const pkg = require('./../package.json');

class AppServer {

  constructor() {

    this.app = new Koa();
    this.server = null;

    const routes = {
      metrics: async ctx => {
        console.log('/metrics');
        let testResults;
        let test = new SpeedTest();
        await test.run()
          .then(v => {
            testResults = promFormatter.format(v);
            console.log('speedtest: ', {download: v.speeds.download, upload: v.speeds.upload, ping: v.server.ping});
          })
          .catch(e => {
            console.log('e', e);
          });
        ctx.type = 'text/plain; version=0.0.4';
        ctx.body = testResults;
      },
      healthcheck: ctx => {
        ctx.type = 'application/json';
        ctx.body = {
          ts: new Date().toJSON(),
          version: pkg.version,
          name: pkg.name,
          repository: pkg.repository,
          server: os.hostname()
        };
      }
    };

    this.app.use(_.get('/metrics/', routes.metrics));
    this.app.use(_.get('/health-check', routes.healthcheck));
  }

  /**
   * Start the server.
   * @returns {Promise}
   */
  start() {
    return new Promise((resolve, reject) => {
      this.server = this.app.listen(9999);
      resolve(this.server);
    });

  }

  /**
   * Stop the server.
   */
  stop() {
    if (this.server) {
      // See https://github.com/koajs/koa/issues/659
      this.server.close();
    }
  }
}

module.exports = AppServer;
