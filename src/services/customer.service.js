const customers = require('../../db/customers');
const NotFoundError = require('../utils/errors/NotFoundError');

const getCustomerById = (id) => {
  const customer = customers.find((item) => item.id === id);

  if (!customer) {
    throw new NotFoundError('Customer not found');
  }

  return customer;
};

module.exports = {
  getCustomerById,
};
