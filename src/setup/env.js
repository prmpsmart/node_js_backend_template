const dotenv = require("dotenv");

const CONFIG = require("./config");

dotenv.config({ path: ".env", debug: true, override: true });

CONFIG.ENV = {
  FROM_EMAIL: process.env.FROM_EMAIL,
  MONGODB_URI: process.env.MONGODB_URI,
  PORT: process.env.PORT,
};
