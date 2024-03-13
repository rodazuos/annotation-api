const { OK, INTERNAL_SERVER_ERROR } = require("http-status");

module.exports = ({ dbContextFactory }) => {
  const check = async (ctx) => {
    try {
      const isConnected = await dbContextFactory.mongoConnection.db
        .admin()
        .ping();
      ctx.status = OK;
      if (isConnected.ok === 1) {
        ctx.body = "Application running. Healthcheck OK!";
      } else {
        ctx.body = "Application running. Without database conenction!";
      }
    } catch (error) {
      ctx.status = INTERNAL_SERVER_ERROR;
      ctx.body = "Database unnavailable!";
    }
  };

  return {
    check,
  };
};
