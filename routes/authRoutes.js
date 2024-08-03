const express = require('express');
const authRoutes = require('../controller/authController.js');

const router = express.Router();

router.post('/register', authRoutes.registerUser);
router.post('/login', authRoutes.loginUser);

module.exports = router;
