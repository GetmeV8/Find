const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// User routes
router.get('/allusers', userController.getUsers);
router.get('/:id', userController.getUser);
router.post('/signup', userController.signUp);
router.post('/login', userController.login);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);
router.get('/profile', userController.getProfile);

module.exports = router; 