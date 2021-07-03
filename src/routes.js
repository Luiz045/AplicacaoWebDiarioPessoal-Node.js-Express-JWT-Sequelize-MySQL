const express = require('express');
const AuthenticateUserController = require("./Controllers/AuthenticateUserController.js");
const CreateRegisterController = require('./Controllers/CreateRegisterController.js');
const CreateUserController = require("./Controllers/CreateUserController.js");
const ListRegistersController = require("./Controllers/ListRegistersController.js");
const ensureAuthenticated = require("./middlewares/EnsureAuthenticate.js");

const routes = express.Router();

routes.post('/users', CreateUserController.handle);
routes.post('/login', AuthenticateUserController.handle);
routes.post('/registers', ensureAuthenticated.verify, CreateRegisterController.handle);
routes.get('/registers', ensureAuthenticated.verify, ListRegistersController.handle);

module.exports = (routes);

