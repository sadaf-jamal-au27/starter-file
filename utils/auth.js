const jwt = require('jsonwebtoken');
const config = require('../config');

const generateToken = (user) => {
  const payload = {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
  };
  return jwt.sign(payload, config.jwtSecret, { expiresIn: '1h' });
};

module.exports = {
  generateToken,
};
