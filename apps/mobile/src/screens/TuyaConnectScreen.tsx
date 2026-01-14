import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PrimaryButton } from '@/ui/PrimaryButton';
import { theme } from '@/ui/Theme';

interface TuyaConnectScreenProps {
  onConnected: () => void;
}

export const TuyaConnectScreen: React.FC<TuyaConnectScreenProps> = ({ onConnected }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conectar Tuya</Text>
      <Text style={styles.subtitle}>
        Autorize sua conta Tuya para sincronizar casas e dispositivos.
      </Text>
      <View style={styles.card}>
        <Text style={styles.label}>Status</Text>
        <Text style={styles.value}>Pronto para conectar</Text>
        <PrimaryButton label="Conectar conta Tuya" onPress={onConnected} />
      </View>
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
    marginBottom: theme.spacing.lg
  },
  card: {
    backgroundColor: theme.colors.surface,
    padding: theme.spacing.lg,
    borderRadius: theme.radius.md,
    gap: theme.spacing.sm
  },
  label: {
    color: theme.colors.textSecondary,
    fontSize: 12
  },
  value: {
    color: theme.colors.textPrimary,
    fontSize: 16
  }
});
