import { ConfigService } from '@nestjs/config';

// environment
const NODE_ENV: string = process.env.NODE_ENV || 'development';

// application
const DOMAIN: string = process.env.DOMAIN || 'localhost';
const PORT: number = +process.env.PORT || 14047;

// mlab
const MLAB_USER = process.env.MLAB_USER || 'admin';
const MLAB_PASS = process.env.MLAB_PASS || 'chnirt1803';
const MLAB_HOST = process.env.MLAB_HOST || 'ds243055.mlab.com';
const MLAB_PORT = +process.env.MLAB_PORT || 43055;
const MLAB_DATABASE =
  process.env.MLAB_DATABASE || 'nestjs-restful-best-practice';
const MLAB_URL =
  process.env.MLAB_URL ||
  `mongodb://${MLAB_USER}:${MLAB_PASS}@${MLAB_HOST}:${MLAB_PORT}/${MLAB_DATABASE}`;

// mongodb
const MONGO_URL: string = process.env.MONGO_PORT
  ? `mongodb://localhost:${process.env.MONGO_PORT}`
  : MLAB_URL;
const MONGO_PORT: number = +process.env.MONGO_PORT || 11049;
const MONGO_DB: string = process.env.MONGO_PORT
  ? 'club-cricket'
  : MLAB_DATABASE;

export {
  NODE_ENV,
  DOMAIN,
  PORT,
  MLAB_USER,
  MLAB_PASS,
  MLAB_HOST,
  MLAB_PORT,
  MLAB_DATABASE,
  MLAB_URL,
  MONGO_URL,
  MONGO_PORT,
  MONGO_DB,
};
