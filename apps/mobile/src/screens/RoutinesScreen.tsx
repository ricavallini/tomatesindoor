import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { Card } from '@/ui/Card';
import { PrimaryButton } from '@/ui/PrimaryButton';
import { theme } from '@/ui/Theme';

interface RoutinesScreenProps {
  onEdit: () => void;
}

export const RoutinesScreen: React.FC<RoutinesScreenProps> = ({ onEdit }) => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Rotinas por Fase</Text>
      <Card>
        <Text style={styles.phase}>Germinação</Text>
        <Text style={styles.detail}>Fotoperíodo 16h · Umidade 70%</Text>
      </Card>
      <Card>
        <Text style={styles.phase}>Vegetativo</Text>
        <Text style={styles.detail}>Fotoperíodo 18h · Ventilação média</Text>
      </Card>
      <Card>
        <Text style={styles.phase}>Floração/Frutificação</Text>
        <Text style={styles.detail}>Fotoperíodo 12h · Umidade 55%</Text>
      </Card>
      <PrimaryButton label="Editar rotina" onPress={onEdit} />
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
  phase: {
    color: theme.colors.textPrimary,
    fontWeight: '600'
  },
  detail: {
    color: theme.colors.textSecondary,
    marginTop: 6
  }
});
