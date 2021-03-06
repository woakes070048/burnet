const feathers = require('feathers/client');
const socketio = require('feathers-socketio/client');
const hooks = require('feathers-hooks');
const io = require('socket.io-client');

var CONSTANTS = require('./config/constants.config.js');

const socket = io(CONSTANTS.SERVER);
const app = feathers()
  .configure(hooks())
  .configure(socketio(socket));

module.exports = app;
