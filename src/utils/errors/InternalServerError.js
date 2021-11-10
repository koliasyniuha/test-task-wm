const { HTTP_ERRORS } = require('../../common/constants');

class InternalServerError extends Error {
  constructor(msg) {
    super(msg);

    this.type = HTTP_ERRORS.INTERNAL_SERVER_ERROR;
  }
}

module.exports = InternalServerError;
