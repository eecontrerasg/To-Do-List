const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const { errorHandler } = require('./middlewares/errorMiddleware');
require('dotenv').config();

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());

// Liveness Check
app.use(
  '/live',
  express.Router().get('/', (req, res, next) => res.status(200).send({ status: 'alive' })),
);

app.use('/tasks', require('./routes/tasks.router'));

/**
 * After Middlewares
 */

// Error handling
app.use(errorHandler);

//-----------------------------------------CORS CONFIGURATION----------------------------------------------
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept,access-token');
  next();
});

module.exports = app;
