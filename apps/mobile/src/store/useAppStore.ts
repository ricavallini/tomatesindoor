import { create } from 'zustand';
import { AlertItem, GardenProfile, SubscriptionPlan, TimelineEvent, TuyaDevice } from '@/types';

interface AppState {
  gardens: GardenProfile[];
  devices: TuyaDevice[];
  alerts: AlertItem[];
  timeline: TimelineEvent[];
  plan: SubscriptionPlan;
  setPlan: (plan: SubscriptionPlan) => void;
  setDevices: (devices: TuyaDevice[]) => void;
  setGardens: (gardens: GardenProfile[]) => void;
  addAlert: (alert: AlertItem) => void;
}

export const useAppStore = create<AppState>((set) => ({
  gardens: [
    { id: 'garden-1', name: 'Minha Horta', location: 'Apartamento' }
  ],
  devices: [],
  alerts: [],
  timeline: [],
  plan: {
    tier: 'free',
    maxGardens: 1,
    maxDevices: 5,
    maxRoutines: 2,
    historyDays: 7,
    advancedAutomations: false,
    exportReports: false
  },
  setPlan: (plan) => set({ plan }),
  setDevices: (devices) => set({ devices }),
  setGardens: (gardens) => set({ gardens }),
  addAlert: (alert) => set((state) => ({ alerts: [alert, ...state.alerts] }))
}));
