import config from "config";
import jwt from "jsonwebtoken";
import Joi from "joi";
import mongoose, { Schema, Document, Model } from "mongoose";
import UserDto from "../dtos/user";

interface IUser {
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
}

interface IUserDocument extends IUser, Document {
  generateAuthToken: () => string;  
}

const userSchema: Schema<IUserDocument> = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024,
  },
  isAdmin: Boolean,
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    {
      _id: this._id,
      name: this.name,
      email: this.email,
      isAdmin: this.isAdmin,
    },
    config.get("jwtPrivateKey")
  );
  return token;
};

export const User = mongoose.model("User", userSchema);

export function validateUser(user: UserDto) {
  const schema = Joi.object({
    name: Joi.string().min(2).max(50).required(),
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(255).required(),
  });

  return schema.validate(user);
}

