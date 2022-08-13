import jwt from "jsonwebtoken";
import config from "config";
import { Response, NextFunction } from "express";
import { IUserRequest } from "../definitions/user-request";

export default (req: IUserRequest, res: Response, next: NextFunction) => {
  if (!config.get("requiresAuth")) return next();

  const token = req.header("x-auth-token");
  if (!token) return res.status(401).send("Access denied. No token provided.");

  try {
    const decoded = jwt.verify(token, config.get("jwtPrivateKey"));
    req.user = decoded;
    next();
  } catch (ex) {
    res.status(400).send("Invalid token.");
  }
};
