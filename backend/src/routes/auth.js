const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/authController');
const Student = require('../models/student');
const Staff = require('../models/staff');

// Create controller instance with models
const authController = new AuthController(Student, Staff);

// Student routes
router.post('/student/login', (req, res) => authController.loginStudent(req, res));
router.post('/student/signup', (req, res) => authController.signupStudent(req, res));

// Staff routes  
router.post('/staff/login', (req, res) => authController.loginStaff(req, res));
router.post('/staff/signup', (req, res) => authController.signupStaff(req, res));

module.exports = router;