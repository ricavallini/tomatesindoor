import { Router } from 'express';

export const logRouter = Router();

logRouter.get('/', (_req, res) => {
  res.json({
    events: [
      {
        id: 'event-1',
        type: 'command',
        detail: 'Ligou luz Grow Light',
        createdAt: new Date().toISOString()
      }
    ]
  });
});
