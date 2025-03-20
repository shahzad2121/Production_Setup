const dotenv = require("dotenv");
const path = require("path");


dotenv.config({path: path.resolve(__dirname, "../../.env.development")});




module.exports = {
  ENV: process.env.ENV,
  PORT: process.env.PORT,
  DB_URL: process.env.DB_URL,
  URL: process.env.URL,
ENV:process.env.ENV
};
