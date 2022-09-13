import config from "config";
import Joi from "joi";
import mongoose, { Schema, Document, Model } from "mongoose";
import NewsDto from "../dtos/news";

interface INews {
  title: string;
  description: string;
  image: string;
  url: string;
}

const newsSchema: Schema<INews> = new Schema({
  title: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 100,
  },
  description: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    unique: true,
  },
  image: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 300
  },
  url: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 300,
  },
});

export const News = mongoose.model("News", newsSchema);

export function validateNews(news: NewsDto) {
  const schema = Joi.object({
    title: Joi.string().min(2).max(100).required(),
    description: Joi.string().min(5).max(255).required(),
    image: Joi.string().min(5).max(300).required(),
    url: Joi.string().min(5).max(300).required()
  });

  return schema.validate(news);
}

