const { Sequelize } = require('sequelize');
const config = require('./config'); // Ensure you have config for database details

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: 'mysql',
  logging: false,
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection to DB has been established successfully.'.magenta.bold);
  } catch (error) {
    console.error(`Unable to connect to the database:${error}`.red.bold);
  }
};

module.exports = { sequelize, connectDB };
