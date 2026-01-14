export class NotificationService {
  async requestPermissions() {
    // TODO: Integrate with Expo Notifications or FCM/APNs.
    return true;
  }

  async scheduleReminder(title: string, body: string, timestamp: number) {
    return { id: `${title}-${timestamp}`, scheduledAt: timestamp };
  }

  async sendLocalAlert(title: string, body: string) {
    return { id: `${title}-${Date.now()}`, title, body };
  }
}
