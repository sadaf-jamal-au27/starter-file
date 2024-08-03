const express = require('express');
const router = express.Router();
const userRoutes = require('../controller/userController');

// User registration
router.post('/register', userRoutes.registerUser);

// User login
router.post('/login', userRoutes.loginUser);

// Get user details
router.get('/:id', userRoutes.getUserById);

// Update user information
router.put('/:id', userRoutes.updateUser);

// Delete a user
router.delete('/:id', userRoutes.deleteUser);

module.exports = router;
