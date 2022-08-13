import config from "config";
import express from "express";
import winston from "winston";
import logging from "./startup/logging";
import cors from "./startup/cors";
import routes from "./startup/routes";
import db from "./startup/db";
import appConfig from "./startup/config";
const app = express();

logging();
cors(app);
routes(app);
db();
appConfig();

const port = process.env.PORT || config.get("port");
const server = app.listen(port, () => {
  winston.info(`Listening on port ${port}...`);
  console.log(`Listening on port ${port}...`);
});

export default server;
