const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const {connectDB,sequelize } = require('./db');
// const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const errorHandler = require('./middlewares/errorHandler');
dotenv.config()
connectDB();
const app = express();
app.use(bodyParser.json());
app.use(errorHandler);

app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 3000;



app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`.yellow.bold);
  try {
    await sequelize.sync();
    console.log('Database synced successfully'.rainbow);
  } catch (error) {
    console.error(`Error syncing database: ${error}`.red.bold);
  }
});
  