const { response } = require('express');
const express = require('express');

const UserController = require('./controllers/UserController');
const AuthController = require('./controllers/AuthController');

const routes = express.Router();

routes.get('/initialize', (request, response) => {
    return response.status(201).json({ 'message': 'Request success!' });
});

// UserController
routes.post('/user', UserController.create);

routes.get('/user', UserController.index);

routes.put('/user', UserController.update);

routes.delete('/user', UserController.delete);

routes.put('/active-user', UserController.reactivateUser);

// AuthController
routes.post('/signIn', AuthController.signIn);

module.exports = routes;