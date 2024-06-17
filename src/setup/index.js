require("./env");

const setupSocketIO = require("./socketio");
const setupMongoDB = require("./mongo_db");

function setup(
  server,
  { newConnectionHandler, socketDisconnectionHandler } = {}
) {
  setupMongoDB();
  setupSocketIO(server, newConnectionHandler, socketDisconnectionHandler);
}

module.exports = setup;
