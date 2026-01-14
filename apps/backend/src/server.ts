import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { authRouter } from './routes/auth.js';
import { gardenRouter } from './routes/gardens.js';
import { deviceRouter } from './routes/devices.js';
import { routineRouter } from './routes/routines.js';
import { logRouter } from './routes/logs.js';
import { subscriptionRouter } from './routes/subscriptions.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/health', (_req, res) => {
  res.json({ status: 'ok', service: 'tomates-indoor-backend' });
});

app.use('/auth', authRouter);
app.use('/gardens', gardenRouter);
app.use('/devices', deviceRouter);
app.use('/routines', routineRouter);
app.use('/logs', logRouter);
app.use('/subscriptions', subscriptionRouter);

const port = process.env.PORT ? Number(process.env.PORT) : 4000;

app.listen(port, () => {
  console.log(`Tomates Indoor API listening on ${port}`);
});
