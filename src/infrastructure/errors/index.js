const { INTERNAL_SERVER_ERROR, BAD_REQUEST } = require("http-status");

class HttpError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

const InternalServerException = (message) =>
  new HttpError(message, INTERNAL_SERVER_ERROR);
const BadRequestException = (message) => new HttpError(message, BAD_REQUEST);

module.exports = {
  InternalServerException,
  BadRequestException,
};
