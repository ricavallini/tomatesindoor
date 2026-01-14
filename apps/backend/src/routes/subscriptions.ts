import { Router } from 'express';

export const subscriptionRouter = Router();

subscriptionRouter.get('/entitlement', (_req, res) => {
  res.json({
    tier: 'free',
    maxGardens: 1,
    maxDevices: 5,
    maxRoutines: 2,
    historyDays: 7,
    advancedAutomations: false,
    exportReports: false
  });
});

subscriptionRouter.post('/webhook/revenuecat', (req, res) => {
  const event = req.body;
  res.json({ received: true, event });
});
