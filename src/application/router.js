const koaRouter = require("@koa/router");

module.exports = ({ healthcheckController, annotationController }) => {
  const router = new koaRouter();

  router.get("/healthcheck", healthcheckController.check);

  router.post("/v1/annotation", annotationController.create);
  router.put("/v1/annotation/:id", annotationController.update);
  router.del("/v1/annotation/:id", annotationController.remove);
  router.get("/v1/annotation/list", annotationController.list);

  return router;
};
