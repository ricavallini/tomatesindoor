import { Router } from 'express';

export const gardenRouter = Router();

gardenRouter.get('/', (_req, res) => {
  res.json({
    gardens: [
      { id: 'garden-1', name: 'Minha Horta', location: 'Apartamento', cultivar: 'Tomate' }
    ]
  });
});

gardenRouter.post('/', (req, res) => {
  const { name, location, cultivar } = req.body;
  res.status(201).json({ id: 'garden-2', name, location, cultivar });
});
