const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String, // Should be hashed in controller
  employeeId: String,
  designation: String,
  department: String
});

module.exports = mongoose.model('Staff', staffSchema);