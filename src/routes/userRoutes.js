const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/v1/user', userController.CreateUser);
router.get('/v1/user/:id', userController.SearchUserId);
router.put('/v1/user/:id', userController.UpdateUser);
router.delete('/v1/user/:id', userController.DeleteUser);

module.exports = {router};
