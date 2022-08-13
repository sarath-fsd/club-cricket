import winston from "winston";
import config from "config";
import mongoose from "mongoose";

export default function () {
  const db: string = config.get("db");
  mongoose.connect(db).then(() => winston.info(`Connected to ${db}...`));
};
