const express = require('express');
const multipleController = require('../../controllers/multiple.controller');

const router = express.Router();

router
  .route('/multiple/')
  .get(multipleController.getMultiple);

module.exports = router;
