import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Card } from '@/ui/Card';
import { PrimaryButton } from '@/ui/PrimaryButton';
import { theme } from '@/ui/Theme';

interface DashboardScreenProps {
  onNavigate: (screen: string) => void;
}

export const DashboardScreen: React.FC<DashboardScreenProps> = ({ onNavigate }) => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Dashboard</Text>
      <View style={styles.grid}>
        <Card>
          <Text style={styles.cardTitle}>Temperatura</Text>
          <Text style={styles.cardValue}>24.5°C</Text>
        </Card>
        <Card>
          <Text style={styles.cardTitle}>Umidade</Text>
          <Text style={styles.cardValue}>62%</Text>
        </Card>
        <Card>
          <Text style={styles.cardTitle}>Luz</Text>
          <Text style={styles.cardValue}>Ligada · 70%</Text>
        </Card>
        <Card>
          <Text style={styles.cardTitle}>Ventilação</Text>
          <Text style={styles.cardValue}>Ligada · Vel 2</Text>
        </Card>
        <Card>
          <Text style={styles.cardTitle}>Irrigação</Text>
          <Text style={styles.cardValue}>Última: 08:30</Text>
        </Card>
        <Card>
          <Text style={styles.cardTitle}>Alertas</Text>
          <Text style={styles.cardValue}>2 pendentes</Text>
        </Card>
      </View>
      <View style={styles.actions}>
        <PrimaryButton label="Ver rotinas" onPress={() => onNavigate('Routines')} />
        <PrimaryButton label="Ver alertas" onPress={() => onNavigate('Alerts')} />
        <PrimaryButton label="Histórico" onPress={() => onNavigate('History')} />
      </View>
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
  grid: {
    gap: theme.spacing.md
  },
  cardTitle: {
    color: theme.colors.textSecondary,
    fontSize: 12
  },
  cardValue: {
    color: theme.colors.textPrimary,
    fontSize: 18,
    marginTop: 8
  },
  actions: {
    gap: theme.spacing.sm,
    marginTop: theme.spacing.md
  }
});
