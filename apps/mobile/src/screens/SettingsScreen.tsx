import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card } from '@/ui/Card';
import { PrimaryButton } from '@/ui/PrimaryButton';
import { theme } from '@/ui/Theme';

interface SettingsScreenProps {
  onPaywall: () => void;
}

export const SettingsScreen: React.FC<SettingsScreenProps> = ({ onPaywall }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configurações</Text>
      <Card>
        <Text style={styles.label}>Plano atual</Text>
        <Text style={styles.value}>Free · 1 horta · 5 dispositivos</Text>
      </Card>
      <Card>
        <Text style={styles.label}>Conta</Text>
        <Text style={styles.value}>usuario@tomatesindoor.com</Text>
      </Card>
      <PrimaryButton label="Gerenciar assinatura" onPress={onPaywall} />
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
    marginBottom: theme.spacing.md
  },
  label: {
    color: theme.colors.textSecondary,
    fontSize: 12
  },
  value: {
    color: theme.colors.textPrimary,
    marginTop: 6
  }
});
