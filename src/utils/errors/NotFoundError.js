const { HTTP_ERRORS } = require('../../common/constants');

class NotFoundError extends Error {
  constructor(msg) {
    super(msg);

    this.type = HTTP_ERRORS.NOT_FOUND;
  }
}

module.exports = NotFoundError;
