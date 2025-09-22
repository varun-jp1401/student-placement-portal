const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/authController');
const Student = require('../models/Student');
const Staff = require('../models/Staff');
const Company = require('../models/Company');

// Create controller instance with models
const authController = new AuthController(Student, Staff);

// Student routes
router.post('/student/login', (req, res) => authController.loginStudent(req, res));
router.post('/student/signup', (req, res) => authController.signupStudent(req, res)); // <-- use controller

// Staff routes  
router.post('/staff/login', (req, res) => authController.loginStaff(req, res));
router.post('/staff/signup', (req, res) => authController.signupStaff(req, res));

// Company routes
router.post('/company/signup', async (req, res) => {
  try {
    // Hash password and check for duplicates
    const { email, password } = req.body;
    const existingCompany = await Company.findOne({ email });
    if (existingCompany) {
      return res.status(400).json({ error: 'Email already exists' });
    }
    const bcrypt = require('bcrypt');
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    req.body.password = hashedPassword;
    const company = new Company(req.body);
    await company.save();
    res.status(201).json({ message: 'Company registered' });
  } catch (err) {
    res.status(400).json({ error: 'Email already exists or invalid data' });
  }
});

module.exports = router;