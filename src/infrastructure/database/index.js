const mongoose = require("mongoose");

const { annotationSchema } = require("./schemas/annotation");

const { DB_HOST, DB_PORT, DB_DATABASE } = process.env;

module.exports = () => {
  const conn = mongoose.createConnection(
    `mongodb://${DB_HOST}:${DB_PORT}/${DB_DATABASE}`
  );

  conn.model("Annotation", annotationSchema);

  return {
    mongoConnection: conn,
    models: conn.models,
  };
};
