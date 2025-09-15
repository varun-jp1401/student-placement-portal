const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

// Define the Staff model
const Staff = sequelize.define('Staff', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'staff', // Specify the table name
  timestamps: true,   // Enable timestamps (createdAt, updatedAt)
});

// Export the Staff model
module.exports = Staff;