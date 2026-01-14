import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card } from '@/ui/Card';
import { PrimaryButton } from '@/ui/PrimaryButton';
import { theme } from '@/ui/Theme';

export const PaywallScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tomates Indoor Pro</Text>
      <Text style={styles.subtitle}>Desbloqueie automações avançadas e relatórios completos.</Text>
      <Card>
        <Text style={styles.feature}>Múltiplas hortas e dispositivos ilimitados</Text>
        <Text style={styles.feature}>Histórico de 90 dias + exportação PDF/CSV</Text>
        <Text style={styles.feature}>Alertas avançados por sensor</Text>
      </Card>
      <PrimaryButton label="Assinar agora" onPress={() => undefined} />
      <Text style={styles.note}>Gerenciado via RevenueCat (placeholder).</Text>
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
  feature: {
    color: theme.colors.textPrimary,
    marginBottom: 8
  },
  note: {
    color: theme.colors.textSecondary,
    marginTop: theme.spacing.md,
    fontSize: 12
  }
});
