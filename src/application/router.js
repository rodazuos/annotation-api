const koaRouter = require("@koa/router");

module.exports = ({ healthcheckController, noteController }) => {
  const router = new koaRouter();

  router.get("/healthcheck", healthcheckController.check);

  router.post("/v1/note", noteController.create);
  router.put("/v1/note/:id", noteController.update);
  router.del("/v1/note/:id", noteController.remove);
  router.get("/v1/note/list", noteController.list);

  return router;
};
