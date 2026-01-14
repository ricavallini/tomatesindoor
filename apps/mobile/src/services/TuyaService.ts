import { TuyaDevice } from '@/types';

export interface TuyaConfig {
  clientId?: string;
  clientSecret?: string;
  endpoint?: string;
  region?: string;
}

export class TuyaService {
  private config: TuyaConfig;
  private mockMode: boolean;

  constructor(config: TuyaConfig) {
    this.config = config;
    this.mockMode = !config.clientId || !config.clientSecret || !config.endpoint;
  }

  isMockMode() {
    return this.mockMode;
  }

  async connectAccount(accessToken: string) {
    if (this.mockMode) {
      return { homes: [{ id: 'home-1', name: 'Mock Home' }] };
    }

    // TODO: Integrate with Tuya OAuth + OpenAPI when credentials are provided.
    return { homes: [] };
  }

  async listDevices(homeId: string): Promise<TuyaDevice[]> {
    if (this.mockMode) {
      return [
        {
          id: 'device-light-1',
          name: 'Grow Light',
          category: 'light',
          status: 'online',
          dps: { on: true, brightness: 70 }
        },
        {
          id: 'device-fan-1',
          name: 'Ventilação',
          category: 'fan',
          status: 'online',
          dps: { on: true, speed: 2 }
        },
        {
          id: 'device-sensor-1',
          name: 'Sensor Clima',
          category: 'sensor',
          status: 'online',
          dps: { temperature: 24.5, humidity: 62 }
        }
      ];
    }

    // TODO: Use Tuya Open API to fetch devices for the given home.
    return [];
  }

  async sendCommand(deviceId: string, dps: Record<string, string | number | boolean>) {
    if (this.mockMode) {
      return { deviceId, success: true, dps };
    }

    // TODO: Use Tuya Open API command endpoint.
    return { deviceId, success: false, dps };
  }

  async getDeviceStatus(deviceId: string) {
    if (this.mockMode) {
      return { deviceId, status: 'online' } as const;
    }

    // TODO: Use Tuya Open API to pull latest status.
    return { deviceId, status: 'offline' } as const;
  }
}
