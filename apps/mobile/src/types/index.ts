export type DeviceCategory =
  | 'light'
  | 'fan'
  | 'humidifier'
  | 'dehumidifier'
  | 'pump'
  | 'sensor'
  | 'camera'
  | 'outlet';

export type DeviceStatus = 'online' | 'offline';

export interface TuyaDevice {
  id: string;
  name: string;
  category: DeviceCategory;
  status: DeviceStatus;
  dps: Record<string, string | number | boolean>;
}

export interface GrowPhase {
  id: string;
  name: string;
  description: string;
  photoperiod: string;
  ventilation: string;
  humidityTarget: string;
  irrigation: string;
}

export interface RoutineRule {
  id: string;
  name: string;
  condition: string;
  action: string;
}

export interface AlertItem {
  id: string;
  title: string;
  detail: string;
  severity: 'info' | 'warning' | 'critical';
  createdAt: string;
}

export interface TimelineEvent {
  id: string;
  title: string;
  detail: string;
  createdAt: string;
}

export interface GardenProfile {
  id: string;
  name: string;
  location: string;
  cultivar?: string;
}

export interface SubscriptionPlan {
  tier: 'free' | 'paid';
  maxGardens: number;
  maxDevices: number;
  maxRoutines: number;
  historyDays: number;
  advancedAutomations: boolean;
  exportReports: boolean;
}
