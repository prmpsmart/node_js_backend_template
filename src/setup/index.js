require("./env");

const setupSwagger = require("./swagger");
const setupSocketIO = require("./socketio");
const setupMongoDB = require("./mongo_db");

function setup(
  server,
  { newConnectionHandler, socketDisconnectionHandler } = {}
) {
  setupMongoDB();
  setupSwagger(server);
  setupSocketIO(server, newConnectionHandler, socketDisconnectionHandler);
}

module.exports = setup;
