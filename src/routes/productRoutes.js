const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();

router.get('/v1/product/search', productController.SearchProductAll);
router.get('/v1/product/:id', productController.SearchProductId);
router.post('/v1/product', productController.CreateProduct);
router.put('/v1/product/:id', productController.UpdateProduct);
router.delete('/v1/product/:id', productController.DeleteProduct);

module.exports = {router};