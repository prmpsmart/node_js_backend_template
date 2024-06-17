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

// Logging middleware
server.use((req, res, next) => {
  const log = `
PATH :: ${req.path}
  METHOD :: ${req.method}
  PARAMS :: ${JSON.stringify(req.params)}
  QUERY :: ${JSON.stringify(req.query)}
  BODY :: ${JSON.stringify(req.body)}

  `;
  console.debug(log);
  next();
});
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
