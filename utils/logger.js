const color = require('colors');

const logInfo = (message) => {
  console.log(Color(message).blue().bold());
};

const logWarning = (message) => {
  console.warn(Color(message).yellow().bold());
};

const logError = (message) => {
  console.error(Color(message).red().bold());
};

module.exports = { logInfo, logWarning, logError };
