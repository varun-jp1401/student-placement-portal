const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String, // Should be hashed in controller
  rollNumber: String,
  department: String,
  year: String,
  cgpa: Number
});

module.exports = mongoose.model('Student', studentSchema);