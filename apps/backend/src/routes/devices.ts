import { Router } from 'express';

export const deviceRouter = Router();

deviceRouter.get('/', (_req, res) => {
  res.json({
    devices: [
      { id: 'device-light-1', name: 'Grow Light', category: 'light', status: 'online' }
    ]
  });
});

deviceRouter.post('/sync', (_req, res) => {
  res.json({ synced: true, message: 'Devices synced via Tuya (placeholder).' });
});

deviceRouter.post('/:deviceId/commands', (req, res) => {
  const { deviceId } = req.params;
  const { dps } = req.body;
  res.json({ deviceId, success: true, dps });
});
