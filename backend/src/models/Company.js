const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  name: String,
  industryType: String,
  email: { type: String, unique: true },
  contactNumber: String,
  hrName: String,
  hrEmail: String,
  address: String,
  website: String,
  size: String,
  jobRole: String,
  package: String,
  minCgpa: Number,
  eligibleDepartments: String,
  jobDescription: String,
  requiredSkills: String,
  deadline: Date,
  interviewMode: String,
  password: String // Should be hashed in controller
});

module.exports = mongoose.model('Company', companySchema);
