const Koa = require('koa');
const _ = require('koa-route');
const SpeedTest = require('./speed-test');
const promFormatter = require('./prom-formatter');
const healthCheckRouter = require('./routes/health-check');
const metricsrouter = require('./routes/metrics');

const CONFIG = {
  PORT: process.env['SPEEDTEST_PORT'] || 9696
};

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
      }
    };

    this.app.use(_.get('/metrics/', routes.metrics));
    this.app.use(healthCheckRouter.routes());
    this.app.use(healthCheckRouter.allowedMethods());
  }

  /**
   * Start the server.
   * @returns {Promise}
   */
  start() {
    return new Promise((resolve, reject) => {
      this.server = this.app.listen(CONFIG.PORT);
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
