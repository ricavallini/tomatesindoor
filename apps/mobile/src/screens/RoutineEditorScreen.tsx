import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card } from '@/ui/Card';
import { PrimaryButton } from '@/ui/PrimaryButton';
import { theme } from '@/ui/Theme';

export const RoutineEditorScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Editor de Rotinas</Text>
      <Card>
        <Text style={styles.label}>Modo</Text>
        <Text style={styles.value}>Recomendado</Text>
      </Card>
      <Card>
        <Text style={styles.label}>Agenda</Text>
        <Text style={styles.value}>Luz 06:00 → 22:00</Text>
      </Card>
      <Card>
        <Text style={styles.label}>Regras por sensor</Text>
        <Text style={styles.value}>Se umidade &lt; 55%: ligar umidificador</Text>
      </Card>
      <PrimaryButton label="Salvar rotina" onPress={() => undefined} />
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
