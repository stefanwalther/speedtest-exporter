const Router = require('koa-router');
const router = new Router();
const pkg = require('./../../package.json');
const os = require('os');

router
  .get('/metrics', async (ctx, next) =>  {
    ctx.type = 'application/json';
    ctx.body = {
      ts: new Date().toJSON(),
      version: pkg.version,
      name: pkg.name,
      repository: pkg.repository,
      server: os.hostname()
    };
  });

module.exports = router;

