const { asFunction, createContainer } = require("awilix");

const serverFactory = require("./application/server");
const routerFactory = require("./application/router");

const healthcheckController = require("./application/controllers/healthcheck");
const noteController = require("./application/controllers/v1/note");

const dbContextFactory = require("./infrastructure/database");

const container = createContainer();

container.register({
  server: asFunction(serverFactory).singleton(),
  router: asFunction(routerFactory).singleton(),

  healthcheckController: asFunction(healthcheckController).singleton(),
  noteController: asFunction(noteController).singleton(),

  dbContextFactory: asFunction(dbContextFactory).singleton()
});

module.exports = container;
