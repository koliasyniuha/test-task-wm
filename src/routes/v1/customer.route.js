const express = require('express');
const customerController = require('../../controllers/customer.controller');

const router = express.Router();

router
  .route('/customers/:id')
  .get(customerController.getCustomerById);

module.exports = router;
