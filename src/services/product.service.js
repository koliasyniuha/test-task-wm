const products = require('../../db/products');
const NotFoundError = require('../utils/errors/NotFoundError');

const getProductById = (id) => {
  const product = products.find((item) => item.id === id);

  if (!product) {
    throw new NotFoundError('Product not found');
  }

  return product;
};

module.exports = {
  getProductById,
};
