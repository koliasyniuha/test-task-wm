const productService = require('../services/product.service');

const getProductById = async (req, res, next) => {
  try {
  	res.json(productService.getProductById(req.params.id));
  } catch (e) {
    next(e);
  }
};

module.exports = {
  getProductById,
};
