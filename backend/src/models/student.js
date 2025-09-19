const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  },
  email: { 
    type: String, 
    required: true, 
    unique: true 
  },
  password: { 
    type: String, 
    required: true 
  },
  rollNumber: { 
    type: String, 
    required: true, 
    unique: true 
  },
  department: { 
    type: String, 
    required: true,
    enum: ['cse', 'ece', 'it', 'mechanical', 'civil']
  },
  year: { 
    type: String, 
    required: true,
    enum: ['2nd', '3rd', 'final']
  },
  cgpa: { 
    type: Number, 
    required: true,
    min: 0,
    max: 10
  },
  isActive: {
    type: Boolean,
    default: true
  },
  resume: {
    type: String, // File path or URL
    default: null
  },
  skills: [{
    type: String
  }],
  applications: [{
    company: String,
    position: String,
    status: {
      type: String,
      enum: ['applied', 'shortlisted', 'selected', 'rejected'],
      default: 'applied'
    },
    appliedDate: {
      type: Date,
      default: Date.now
    }
  }]
}, { timestamps: true });

module.exports = mongoose.model('Student', studentSchema);