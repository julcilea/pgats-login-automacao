const express = require('express');
const bodyParser = require('body-parser');
const authController = require('./controllers/authController');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const app = express();
app.use(bodyParser.json());

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Login API',
      version: '1.0.0',
      description: 'Documentação da API de Login',
    },
  },
  apis: ['./src/controllers/*.js'],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.post('/login', authController.login);

module.exports = app;
