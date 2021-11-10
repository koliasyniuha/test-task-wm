const express = require('express');
const productController = require('../../controllers/product.controller');

const router = express.Router();

router
  .route('/products/:id')
  .get(productController.getProductById);

module.exports = router;
