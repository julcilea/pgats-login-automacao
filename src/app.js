const express = require('express');
const bodyParser = require('body-parser');
const authController = require('./controllers/authController');

const app = express();
app.use(bodyParser.json());

app.post('/login', authController.login);

module.exports = app;
