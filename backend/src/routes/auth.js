const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/authController');

const authController = new AuthController();

// Student login route
router.post('/login/student', authController.loginStudent);

// Staff login route
router.post('/login/staff', authController.loginStaff);

// Student signup route
router.post('/signup/student', authController.signupStudent);

// Staff signup route
router.post('/signup/staff', authController.signupStaff);

module.exports = router;