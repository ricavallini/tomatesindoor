import { Router } from 'express';
import { signToken } from '../services/jwt.js';

export const authRouter = Router();

authRouter.post('/register', (req, res) => {
  const { email } = req.body;
  const token = signToken({ email });
  res.json({ token, user: { id: 'user-1', email } });
});

authRouter.post('/login', (req, res) => {
  const { email } = req.body;
  const token = signToken({ email });
  res.json({ token, user: { id: 'user-1', email } });
});

authRouter.post('/oauth', (req, res) => {
  const { provider, email } = req.body;
  const token = signToken({ email, provider });
  res.json({ token, user: { id: 'user-1', email, provider } });
});
