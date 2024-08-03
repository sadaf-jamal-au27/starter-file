const { BAD_REQUEST, NOT_FOUND } = require('../utils/statusCodes');

const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  
  res.status(statusCode).json({ message });
};

module.exports = errorHandler;
