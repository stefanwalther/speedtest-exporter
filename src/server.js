const Koa = require('koa');
const _ = require('koa-route');
const speedTest = require('./speed-test');
const promFormatter = require('./prom-formatter');

const app = new Koa();

const routes = {
  metrics: async (ctx) => {
    console.log('/metrics');
    let testResults;
    let test = new speedTest();
    await test.run()
      .then( v => {
        testResults = promFormatter.format(v);
        console.log('speedtest: ', v.speeds.download, v.speeds.upload);
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
