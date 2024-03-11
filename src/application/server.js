require("dotenv").config();

const koa = require("koa");
const bodyParser = require("koa-bodyparser");
const koaCors = require("@koa/cors");

module.exports = ({ router }) => {
  const app = new koa();

  app
    .use(
      koaCors({
        credentials: true,
      })
    )
    .use(bodyParser({ enableTypes: ["json"] }))
    .use(router.routes());

  return {
    app,
    start: async () => {
      try {
        app.listen(process.env.PORT, () => {
          // eslint-disable-next-line no-console
          console.log(`App running in port: ${process.env.PORT}`);
        });
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(`Problem to initializing application: ${error}`);
        process.exit(1);
      }
    },
  };
};
