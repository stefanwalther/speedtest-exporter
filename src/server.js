const Koa = require('koa');
const _ = require('koa-route');
const SpeedTest = require('./speed-test');
const promFormatter = require('./prom-formatter');

const app = new Koa();

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

app.use(_.get('/metrics/', routes.metrics));

app.listen(9696);
