const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
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
  employeeId: { 
    type: String, 
    required: true, 
    unique: true 
  },
  designation: { 
    type: String, 
    required: true 
  },
  department: { 
    type: String, 
    required: true,
    enum: ['cse', 'ece', 'it', 'mechanical', 'civil', 'placement', 'administration']
  },
  role: {
    type: String,
    enum: ['admin', 'placement_officer', 'faculty'],
    default: 'faculty'
  },
  isActive: {
    type: Boolean,
    default: true
  },
  permissions: [{
    type: String,
    enum: ['manage_students', 'manage_companies', 'schedule_interviews', 'view_analytics']
  }]
}, { timestamps: true });

module.exports = mongoose.model('Staff', staffSchema);