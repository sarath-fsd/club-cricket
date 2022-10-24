import mongoose, { Schema, Document, Model } from 'mongoose';

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
  },
  image: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 300,
  },
  url: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 300,
  },
});

export const News = mongoose.model('News', newsSchema);
