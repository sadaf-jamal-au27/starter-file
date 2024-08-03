const { DataTypes } = require('sequelize');
const {sequelize} = require('../db');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
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
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM('guest', 'user', 'bus_driver', 'admin'),
    defaultValue: 'user',
  },
}, {
  indexes: [
    {
      unique: true,
      fields: ['email'],
    },
  ],
});

module.exports = User;
