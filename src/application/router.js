const koaRouter = require("@koa/router");

module.exports = () => {
  const router = new koaRouter();

  router.get("/healthcheck", (ctx) => {
    ctx.body = "Application running. Healthcheck OK!";
  });

  return router;
};
