const express = require('express');
const categoryController = require('../controllers/categoryController');

const router = express.Router();

router.get('/v1/category/search', categoryController.SearchCategoryAll);
router.get('/v1/category/:id', categoryController.SearchCategoryId);
router.post('/v1/category', categoryController.CreateCategory);
router.put('/v1/category/:id', categoryController.UpdateCategory);
router.delete('/v1/category/:id', categoryController.DeleteCategory);

module.exports = {router};
