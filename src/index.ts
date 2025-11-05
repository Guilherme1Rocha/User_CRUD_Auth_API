import dotenv from 'dotenv';
import express from 'express';
import http from 'http';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import mongoose from 'mongoose';
import router from './router/index';
import { getRequiredEnvVariable } from './helpers';

dotenv.config();

const app = express();

app.use(cors({ credentials: true }));
app.use(compression());
app.use(cookieParser());
app.use(express.json()); // built-in JSON parser

const server = http.createServer(app);

const port = 8080;

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});

const username = encodeURIComponent(getRequiredEnvVariable('MONGODB_USER'));
const password = encodeURIComponent(getRequiredEnvVariable('MONGODB_PASS'));
const MONGO_URL = getRequiredEnvVariable('MONGODB_URI')
  .replace('<USERNAME>', username)
  .replace('<PASSWORD>', password);

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL)
mongoose.connection.on('error', (error: Error) => console.log(error));

app.use('/', router())
