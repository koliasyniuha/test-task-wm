const HTTP_ERRORS = Object.freeze({
  NOT_FOUND: 'NOT_FOUND',
  INTERNAL_SERVER_ERROR: 'INTERNAL_SERVER_ERROR',
});

const HTTP_STATUSES = Object.freeze({
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
});

module.exports = {
  HTTP_ERRORS,
  HTTP_STATUSES,
};
