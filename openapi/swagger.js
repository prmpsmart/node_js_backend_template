const swaggerAutogen = require("swagger-autogen");

const schemas = require("./schemas");
const definitions = require("./definitions");

const documentation = {
  openapi: "3.0.0",
  info: {
    title: "Investment by Jodna Technologies",
    description: "Investment REST API Documentation",
    version: "1.0.0",
    contact: {
      name: "Miracle Apata",
      url: "https://github.com/prmpsmart",
      email: "prmpsmart@gmail.com",
    },
  },

  basePath: "/",
  schemes: ["http", "https"],
  consumes: ["application/json"],
  produces: ["application/json"],

  servers: [
    {
      url: "https://token-realty.onrender.com/api/",
      description: "Remote Host - PRMPSMART",
    },
    {
      url: "http://localhost:8000/api/",
      description: "Local Server",
    },
  ],

  components: {
    schemas: schemas,
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
  },
  definitions: definitions,
  // security: [
  //   {
  //     bearerAuth: [],
  //   },
  // ],
};

const outputFile = "./src/openapi.json";
const endpointsFiles = ["./src/routers/index.js"];

swaggerAutogen({ openapi: "3.0.0" })(outputFile, endpointsFiles, documentation);
