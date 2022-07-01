process.env.NODE_ENV =
  process.env.NODE_ENV &&
  process.env.NODE_ENV.trim().toLowerCase() == "production"
    ? "production"
    : "development";
const express = require("./config/express");
const { logger } = require("./config/winston");

const port = 3000;
express().listen(port);
logger.info(`트레시하우 API Server Start At Port ${port}`);
