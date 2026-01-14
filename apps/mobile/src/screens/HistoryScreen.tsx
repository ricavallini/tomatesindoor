import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { Card } from '@/ui/Card';
import { theme } from '@/ui/Theme';

export const HistoryScreen: React.FC = () => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Histórico e Relatórios</Text>
      <Card>
        <Text style={styles.label}>Temperatura</Text>
        <Text style={styles.value}>Últimas 24h: média 24.1°C</Text>
      </Card>
      <Card>
        <Text style={styles.label}>Umidade</Text>
        <Text style={styles.value}>Últimas 24h: média 61%</Text>
      </Card>
      <Card>
        <Text style={styles.label}>Eventos</Text>
        <Text style={styles.value}>12 comandos executados</Text>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background
  },
  content: {
    padding: theme.spacing.lg
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
