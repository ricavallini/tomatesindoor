import { Router } from 'express';

export const routineRouter = Router();

routineRouter.get('/', (_req, res) => {
  res.json({
    routines: [
      {
        id: 'routine-1',
        phase: 'Vegetativo',
        schedule: '06:00-22:00',
        rules: ['Se umidade < 55% ligar umidificador']
      }
    ]
  });
});

routineRouter.post('/', (req, res) => {
  const routine = req.body;
  res.status(201).json({ id: 'routine-2', ...routine });
});
