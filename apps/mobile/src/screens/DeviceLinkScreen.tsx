import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card } from '@/ui/Card';
import { PrimaryButton } from '@/ui/PrimaryButton';
import { theme } from '@/ui/Theme';

interface DeviceLinkScreenProps {
  onFinish: () => void;
}

export const DeviceLinkScreen: React.FC<DeviceLinkScreenProps> = ({ onFinish }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vincular Dispositivos</Text>
      <Text style={styles.subtitle}>Selecione quais dispositivos Tuya pertencem à sua horta.</Text>
      <Card>
        <Text style={styles.deviceName}>Grow Light</Text>
        <Text style={styles.deviceDetail}>Luz · Online</Text>
      </Card>
      <Card>
        <Text style={styles.deviceName}>Ventilação</Text>
        <Text style={styles.deviceDetail}>Ventoinha · Online</Text>
      </Card>
      <Card>
        <Text style={styles.deviceName}>Sensor Clima</Text>
        <Text style={styles.deviceDetail}>Temperatura/Umidade · Online</Text>
      </Card>
      <PrimaryButton label="Concluir onboarding" onPress={onFinish} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: theme.spacing.lg,
    backgroundColor: theme.colors.background
  },
  title: {
    color: theme.colors.textPrimary,
    fontSize: 24,
    fontWeight: '700',
    marginBottom: theme.spacing.sm
  },
  subtitle: {
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.md
  },
  deviceName: {
    color: theme.colors.textPrimary,
    fontWeight: '600'
  },
  deviceDetail: {
    color: theme.colors.textSecondary,
    marginTop: 4
  }
});
