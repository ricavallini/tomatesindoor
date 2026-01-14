import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { Card } from '@/ui/Card';
import { PrimaryButton } from '@/ui/PrimaryButton';
import { theme } from '@/ui/Theme';

interface AlertsScreenProps {
  onOpen: () => void;
}

export const AlertsScreen: React.FC<AlertsScreenProps> = ({ onOpen }) => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Alertas</Text>
      <Card>
        <Text style={styles.alertTitle}>Umidade fora da faixa</Text>
        <Text style={styles.alertDetail}>Registrado há 2h</Text>
      </Card>
      <Card>
        <Text style={styles.alertTitle}>Dispositivo offline</Text>
        <Text style={styles.alertDetail}>Sensor Clima sem resposta</Text>
      </Card>
      <PrimaryButton label="Ver detalhe" onPress={onOpen} />
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
  alertTitle: {
    color: theme.colors.warning,
    fontWeight: '600'
  },
  alertDetail: {
    color: theme.colors.textSecondary,
    marginTop: 4
  }
});
