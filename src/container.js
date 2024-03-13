const { asFunction, createContainer } = require("awilix");

const serverFactory = require("./application/server");
const routerFactory = require("./application/router");

const healthcheckController = require("./application/controllers/healthcheck");
const annotationController = require("./application/controllers/v1/annotation");

const dbContextFactory = require("./infrastructure/database");
const repositories = require("./infrastructure/repositories");

const container = createContainer();

container.register({
  server: asFunction(serverFactory).singleton(),
  router: asFunction(routerFactory).singleton(),

  healthcheckController: asFunction(healthcheckController).singleton(),
  annotationController: asFunction(annotationController).singleton(),

  dbContextFactory: asFunction(dbContextFactory).singleton(),
  repository: asFunction(repositories).singleton(),
});

module.exports = container;
