import { SubscriptionPlan } from '@/types';

export class SubscriptionService {
  async getEntitlement(): Promise<SubscriptionPlan> {
    // TODO: Integrate RevenueCat SDK and map entitlements.
    return {
      tier: 'free',
      maxGardens: 1,
      maxDevices: 5,
      maxRoutines: 2,
      historyDays: 7,
      advancedAutomations: false,
      exportReports: false
    };
  }

  async purchaseSubscription() {
    // TODO: Trigger RevenueCat paywall purchase flow.
    return { success: true };
  }
}
