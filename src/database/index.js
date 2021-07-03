const Sequelize = require("sequelize");
const credentials = require("../config/database");
const Register = require("../models/Registers");
const User = require("../models/Users.js")

const connection = new Sequelize(credentials);
User.init(connection);
Register.init(connection);

User.associate(connection.models);
Register.associate(connection.models);

module.exports = connection;