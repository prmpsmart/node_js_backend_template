const http = require("http");
let socketIo;

try {
  socketIo = require("socket.io");
} catch {
  console.debug(`socket.io not used in project`);
}

function setupSocketIO({
  server,
  newConnectionHandler,
  socketDisconnectionHandler,
}) {
  // Create HTTP server and initialize Socket.IO
  if (!socketIo) return;

  const io = socketIo(http.createServer(server));

  io.on("connection", (socket) => {
    if (newConnectionHandler) newConnectionHandler(socket);

    socket.on("disconnect", () => {
      if (socketDisconnectionHandler) socketDisconnectionHandler(socket);
    });
  });
}

module.exports = setupSocketIO;
