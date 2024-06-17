const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Investment by Jodna Technologies",
      description: "Investment REST API Documentation",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:8000/api/",
        description: "Local Server",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    // security: [
    //   {
    //     bearerAuth: [],
    //   },
    // ],
  },
  apis: ["./src/routers/*.js"], // Path to the API routes
};

const specs = swaggerJsdoc(options);

function setupSwagger(server) {
  server.use("/", swaggerUi.serve, swaggerUi.setup(specs));
}

module.exports = setupSwagger;
