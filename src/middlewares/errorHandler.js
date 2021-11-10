const { HTTP_ERRORS, HTTP_STATUSES } = require('../common/constants');

const errorHandler = async (err, req, res, next) => {
  switch (err.type) {
    case HTTP_ERRORS.NOT_FOUND:
      res.status(HTTP_STATUSES.NOT_FOUND).json({
        status: HTTP_STATUSES.NOT_FOUND,
        response: {
          message: err.message,
        },
      });
      break;
    default:
      res.status(HTTP_STATUSES.INTERNAL_SERVER_ERROR).json({
        status: HTTP_STATUSES.INTERNAL_SERVER_ERROR,
        response: {
          message: err.message,
        },
      });
      break;
  }
  next();
};

module.exports = {
  errorHandler,
};
