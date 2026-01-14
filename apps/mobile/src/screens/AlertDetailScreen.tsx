import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card } from '@/ui/Card';
import { theme } from '@/ui/Theme';

export const AlertDetailScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalhe do Alerta</Text>
      <Card>
        <Text style={styles.label}>Tipo</Text>
        <Text style={styles.value}>Umidade fora da faixa</Text>
      </Card>
      <Card>
        <Text style={styles.label}>Dispositivo</Text>
        <Text style={styles.value}>Sensor Clima</Text>
      </Card>
      <Card>
        <Text style={styles.label}>Ação sugerida</Text>
        <Text style={styles.value}>Verifique o umidificador e a ventilação.</Text>
      </Card>
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
