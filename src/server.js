const { meta } = require("@eslint/js");
const config = require("./config/config");
const express = require("express");

const app = express();

const server = app.listen(config.PORT);

;(() => {
  try {
    console.info(`Starting server...`, {
      meta: {
        PORT: config.PORT,
        URL: config.URL,
        DB_URL: config.DB_URL,
      },
    });
  } catch (error) {
    console.error(`Application is not running on port ${config.PORT}.`, {
      meta: {
        error: error.message,
      },
    });
    server.close((error) => {
      if (error) {
        console.error(error);
      }
      process.exit(1);
    });
  }
})();
