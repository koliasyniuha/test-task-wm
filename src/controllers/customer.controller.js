const customerService = require('../services/customer.service');

const getCustomerById = async (req, res, next) => {
  try {
  	res.json(customerService.getCustomerById(req.params.id));
  } catch (e) {
    next(e);
  }
};

module.exports = {
  getCustomerById,
};
