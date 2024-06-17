const express = require("express");
const cors = require("cors");
const { setup, routers } = require("./src");

const server = express();

server.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PATCH", "DELETE"],
  })
);

server.use(express.json());
server.use(express.urlencoded({ limit: "50mb", extended: true }));

// Error handling middleware
server.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

// Setup the server
setup(server);
server.use("/api", routers);

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
