import express, { Express } from "express";
import authRouter from "../routers/auth";
import usersRouter from "../routers/users";
import newsRouter from "../routers/news";

export default function (app: Express) {
  app.use(express.json());
  app.get("/", (req, res) => {
    res.send("App is up and running.");
  });
  app.use("/api/auth", authRouter);
  app.use("/api/users", usersRouter);
  app.use("/api/news", newsRouter);
}
